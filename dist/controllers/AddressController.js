"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAddressEndpoint = exports.getAddress = void 0;
const AddressValidStatus_1 = __importDefault(require("../models/AddressValidStatus"));
let nodeGeocoder = require("node-geocoder");
let options = {
    provider: "openstreetmap",
};
const getAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { streetName, postalCode, city } = req.body;
    try {
        const geoCoder = nodeGeocoder(options);
        const response = yield geoCoder.geocode(`${streetName} ${postalCode} ${city}`);
        res.status(200).send(response[0]);
    }
    catch (e) {
        res.status(500).send({ message: "Something went wront" });
    }
});
exports.getAddress = getAddress;
const validateAddressEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { wasValid } = req.query;
    try {
        AddressValidStatus_1.default.create({
            wasValid: wasValid == 'true' ? true : false
        });
        res.status(200).send({ message: true });
    }
    catch (e) {
        res.status(500).send({ message: "Something went wront" });
    }
});
exports.validateAddressEndpoint = validateAddressEndpoint;

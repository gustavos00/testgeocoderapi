import { Request, Response } from "express";
import AddressValidStatus from "../models/AddressValidStatus";

let nodeGeocoder = require("node-geocoder");
let options = {
  provider: "openstreetmap",
};

export const getAddress = async (req: Request, res: Response) => {
  const { streetName, postalCode, city } = req.body;

  try {
    const geoCoder = nodeGeocoder(options);
    const response = await geoCoder.geocode(
      `${streetName} ${postalCode} ${city}`
    );

    res.status(200).send(response[0]);
  } catch (e) {
    res.status(500).send({ message: "Something went wront" });
  }
};

export const validateAddressEndpoint = async (req: Request, res: Response) => {
    const { wasValid } = req.query
    
    try {
        AddressValidStatus.create({
            wasValid: wasValid == 'true' ? true : false
        })
    
        res.status(200).send({ message: true });
      } catch (e) {
        res.status(500).send({ message: "Something went wront" });
      }
};


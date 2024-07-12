import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Customer } from "../models/customerDetails.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { DocumentDetails } from "../models/documentDetails.model.js";

const documentsUpload = asyncHandler(async (req, res) => {
    const { customerId } = req.body;

    if (!customerId) {
        throw new ApiError(400, 'Customer ID is required');
    }

    const customer = await Customer.findById(customerId);
    if (!customer) {
        throw new ApiError(400, 'Customer not found');
    }

    const customerDocument1LocalPath = req.files?.customerDocument1?.[0]?.path;
    const customerDocument2LocalPath = req.files?.customerDocument2?.[0]?.path;
    console.log(customerDocument1LocalPath);
    console.log(customerDocument2LocalPath);
    if (!customerDocument1LocalPath) {
        throw new ApiError(400, 'Customer document file is required');
    }
    if (!customerDocument2LocalPath) {
        throw new ApiError(400, 'Customer document file is required');
    }

    let document1;
    try {
        document1 = await uploadOnCloudinary(customerDocument1LocalPath);
    } catch (error) {
        throw new ApiError(500, 'Error uploading document to Cloudinary');
    }

    if (!document1) {
        throw new ApiError(500, 'Error uploading document to Cloudinary');
    }

    let document2;
    try {
        document2 = await uploadOnCloudinary(customerDocument2LocalPath);
    } catch (error) {
        throw new ApiError(500, 'Error uploading document to Cloudinary');
    }

    if (!document2) {
        throw new ApiError(500, 'Error uploading document to Cloudinary');
    }
    
    const savedDocument = await DocumentDetails.create({
        customerDocument1: document1.url,
        customerDocument2: document2.url,
    });

    if (!savedDocument) {
        throw new ApiError(500, 'Error occurred while saving document details');
    }

    customer.documentDetails = savedDocument._id;
    await customer.save();

    return res.status(201).json(
        new ApiResponse(200, savedDocument, 'Documents uploaded successfully')
    );
});

export { documentsUpload };

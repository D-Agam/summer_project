import { Router } from "express";
import { createPersonalDetails } from "../controllers/personalDetails.controller.js";
import { createAccountDetails, verifyEmailOtp, verifyMobileOtp } from "../controllers/accountDetails.controller.js";
import { registerUser, loginUser, logoutUser, refreshAccessToken } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { employmentDetail } from "../controllers/employemenDetails.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { documentsUpload } from "../controllers/documentDetails. controller.js";
import {changeCurrentPassword} from "../controllers/user.controller.js"
const router = Router();
router.post("/personal-details", createPersonalDetails);
router.post("/account-details", createAccountDetails);
router.post('/verify-email-otp', verifyEmailOtp);
router.post('/verify-mobile-otp', verifyMobileOtp);
router.post('/registerCustomer', registerUser);
router.post('/loginCustomer', loginUser);
router.post('/logoutCustomer', verifyJWT, logoutUser);
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/refresh-token").post(refreshAccessToken);
//When an API call fails due to an expired access token
// (usually indicated by a 401 Unauthorized status), 
//the client should catch this error and then call the /refresh-token
// endpoint to get a new access token.
router.route("/upload-documents").post(upload.fields([
    {
        name: "customerDocument1",
        maxCount: 1
    },
    {
        name: "customerDocument2",
        maxCount: 1
    }
]),
    documentsUpload);
router.route("/employeeDetails").post(employmentDetail);
export default router;

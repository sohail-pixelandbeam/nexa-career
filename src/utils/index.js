export const getCurrentDate = () => {
    const currentDate = new Date();
    // Get day, month, and year
    const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero if needed
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = currentDate.getFullYear();

    // Format the date as "DD-MM-YYYY"
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}

export const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
};

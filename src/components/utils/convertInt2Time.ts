
const convertInt2Time = (intTime: number) => {
    try {
        const totalSec = Math.floor(intTime / 1000); // Calculate full seconds
        const minutes = Math.floor(totalSec / 60);   // Calculate total minutes
        const seconds = minutes % 60;                // Calculate remaining seconds
        // Use padStart(2, '0') to ensure two digits for the display
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        
    } catch (error) {
        return `Error while converting units`
    }
};

export default convertInt2Time;
export default {
    errorData: (statusCode: number, message: string) => {
        if (statusCode == 400 && !message) {
            return {
                statusCode: statusCode,
                data: { message: 'Bad request' },
            };
        }
        return {
            statusCode: statusCode,
            result: { message: message },
        };
    },

    responseData: (statusCode: number, result: any) => {
        return { statusCode, result };
    },
};

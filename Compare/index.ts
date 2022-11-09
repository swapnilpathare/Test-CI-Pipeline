import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
        let firstText = req.body.firstText;
        let secondText = req.body.secondText;

        let compare = (firstText === secondText) ? 'Strings are Same' : 'Comparision Failed';

        if(firstText && secondText) {
            context.res = {
                status: 200,
                body: compare
            }
        } else {
            context.res = {
                status: 400,
                body: "Please pass required parameters in the request body"
            };
        }
};

export default httpTrigger;
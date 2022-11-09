import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const firstText = req.body.firstText;
    const secondText = req.body.secondText;
    let concate = firstText.concat(" ", secondText);

    context.res = {
        body: concate + ' --- 1strings after concatenation',
    };

};

export default httpTrigger;
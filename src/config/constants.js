const Env = {
    DEV_URL: 'http://apirnigestao.ciatecnica.com.br/api/',
    HML_URL: 'https://apigestaovendas-hml.azurewebsites.net/api/',
    PROD_URL: 'https://backend-gvendas.azurewebsites.net/api/',

    BARRAMENTO_DEV_URL:
        'http://esb-rni.southcentralus.cloudapp.azure.com:8280/gvendas/',
    BARRAMENTO_HML_URL:
        'http://esb-rni.southcentralus.cloudapp.azure.com:8280/gvendas_HML/',
    BARRAMENTO_PROD_URL:
        'http://rni-esb-prd.southcentralus.cloudapp.azure.com:8280/gvendas/'
};

export default {
    BASE_URL: Env.HML_URL,
    BASE_BARRAMENTO_URL: Env.BARRAMENTO_DEV_URL
};

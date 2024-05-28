import fs from 'fs';

const payLoad = {
    query: [
        {
            code: 'KontoSlagPostMot',
            selection: {
                filter: 'item',
                values: [
                    'A-L/F01--F89-F65/S0'
                ]
            }
        },
        {
            code: 'ContentsCode',
            selection: {
                filter: 'item',
                values: ['000003NF']
            }
        },
        {
            code: 'Tid',
            selection: {
                filter: 'item',
                values: [
                    '1996K1',
                    '1996K2',
                    '1996K3',
                    '1996K4',
                    '1997K1',
                    '1997K2',
                    '1997K3',
                    '1997K4',
                    '1998K1',
                    '1998K2',
                    '1998K3',
                    '1998K4',
                    '1999K1',
                    '1999K2',
                    '1999K3',
                    '1999K4',
                    '2000K1',
                    '2000K2',
                    '2000K3',
                    '2000K4',
                    '2001K1',
                    '2001K2',
                    '2001K3',
                    '2001K4',
                    '2002K1',
                    '2002K2',
                    '2002K3',
                    '2002K4',
                    '2003K1',
                    '2003K2',
                    '2003K3',
                    '2003K4',
                    '2004K1',
                    '2004K2',
                    '2004K3',
                    '2004K4',
                    '2005K1',
                    '2005K2',
                    '2005K3',
                    '2005K4',
                    '2006K1',
                    '2006K2',
                    '2006K3',
                    '2006K4',
                    '2007K1',
                    '2007K2',
                    '2007K3',
                    '2007K4',
                    '2008K1',
                    '2008K2',
                    '2008K3',
                    '2008K4',
                    '2009K1',
                    '2009K2',
                    '2009K3',
                    '2009K4',
                    '2010K1',
                    '2010K2',
                    '2010K3',
                    '2010K4',
                    '2011K1',
                    '2011K2',
                    '2011K3',
                    '2011K4',
                    '2012K1',
                    '2012K2',
                    '2012K3',
                    '2012K4',
                    '2013K1',
                    '2013K2',
                    '2013K3',
                    '2013K4',
                    '2014K1',
                    '2014K2',
                    '2014K3',
                    '2014K4',
                    '2015K1',
                    '2015K2',
                    '2015K3',
                    '2015K4',
                    '2016K1',
                    '2016K2',
                    '2016K3',
                    '2016K4',
                    '2017K1',
                    '2017K2',
                    '2017K3',
                    '2017K4',
                    '2018K1',
                    '2018K2',
                    '2018K3',
                    '2018K4',
                    '2019K1',
                    '2019K2',
                    '2019K3',
                    '2019K4',
                    '2020K1',
                    '2020K2',
                    '2020K3',
                    '2020K4',
                    '2021K1',
                    '2021K2',
                    '2021K3',
                    '2021K4',
                    '2022K1',
                    '2022K2',
                    '2022K3',
                    '2022K4',
                    '2023K1',
                    '2023K2',
                    '2023K3',
                    '2023K4',
                    '2024K1']
            }
        }
    ],
    response: {
        format: 'json'
    }
}

export const getData = async () => {
    const data = await fetch('https://api.scb.se/OV0104/v1/doris/en/ssd/START/FM/FM0105/FM0105A/FM0105T01', {
        method: 'POST',
        body: JSON.stringify(payLoad),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    data.json().then((data) => {
        fs.writeFileSync('data.json', JSON.stringify(data, null, 4));
        console.log(data);
    }
    );
}

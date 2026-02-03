function attachEventsListeners() {
    const convertBtn = document.getElementById('convert')
            .addEventListener('click', convert);   

    function convert()
    {
        const value = document.getElementById('inputDistance').value;
        const startType = document.getElementById('inputUnits').value;
        const convertType = document.getElementById('outputUnits').value;

        let meters;

        switch(startType)
        {
            case 'km':
                meters = value * 1000;
                break;
            case 'cm':
                meters = value / 100;
                break;
            case 'mm':
                meters = value / 1000;
                break;
            case 'mi':
                meters = value * 1609.34;
                break;
            case 'yrd':
                meters = value * 0.9144;
                break;
            case 'ft':
                meters = value * 0.3048;
                break;
            case 'in': 
                meters = value * 0.0254;
                break;
            default:
                meters = value;
                break;
        }

        let converted;

        switch(convertType)
        {
            case 'km':
                converted = meters / 1000;
                break;
            case 'cm':
                converted = meters * 100;
                break;
            case 'mm':
                converted = meters * 1000;
                break;
            case 'mi':
                converted = meters / 1609.34;
                break;
            case 'yrd':
                converted = meters / 0.9144;
                break;
            case 'ft':
                converted = meters / 0.3048;
                break;
            case 'in': 
                converted = meters / 0.0254;
                break;
            default:
                converted = meters;
                break; 
        }

        document.getElementById('outputDistance').value = converted;
    }
}
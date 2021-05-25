import weatherbit from './weatherbit';
import forecast from './forecast';

export default {
    forecast: forecast(weatherbit)
}
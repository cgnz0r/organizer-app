export default function(instance) {
    return {
        getCurrentWeather() {
            return instance.get('current');
        }
    }
}
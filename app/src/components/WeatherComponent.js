export class WeatherComponent {
    constructor(filteredList) {
        this.filteredList = filteredList;
    }
    toString() {
        return this.filteredList.toString();
    }
    showToday(date) {
        if (date.getDate() === new Date().getDate()) {
            return "<div class='weather_today'>Today</div>";
        }
        return "";
    }
    toHtml() {
        let html = "";
        const list = this.filteredList;
        for (let i = 0; i <= list.length - 1; i = i + 1) {
            const w = list[i].weather[0];
            const dateTime = new Date(list[i].dt * 1000);
            html = `   <div class='weather_container'>
                            <div class='weather_date'>${dateTime.toDateString()}</div>
                            ${this.showToday(dateTime)}
                            <div class='weather_description'>${w.description}</div>
                            <img class='weather_img' src="http://openweathermap.org/img/w/${w.icon}.png" />
                        </div>`;
        }
        return html;
    }
}


document.getElementById('calculate-btn').addEventListener('click', function() {
    const distance = document.getElementById('distance').value;
    const vehicle = document.getElementById('vehicle-select').value;

    if (distance && vehicle) {
        const vehicles = {
            'Maruti Suzuki Alto': { speed: 140, efficiency: 22.05, range: 771.75 },
            'Hyundai i20': { speed: 180, efficiency: 20.35, range: 753.05 },
            'Tata Nexon': { speed: 180, efficiency: 17.57, range: 772.68 },
            'Honda City': { speed: 180, efficiency: 17.8, range: 712.00 },
            'Mahindra Thar': { speed: 155, efficiency: 15.2, range: 866.40 },
            'Toyota Innova Crysta': { speed: 179, efficiency: 11.25, range: 618.75 },
            'Kia Seltos': { speed: 170, efficiency: 16.8, range: 840.00 },
            'Renault Kwid': { speed: 150, efficiency: 22.3, range: 624.40 },
            'Ford EcoSport': { speed: 182, efficiency: 15.9, range: 826.80 },
            'Tata Tiago': { speed: 150, efficiency: 23.84, range: 834.40 }
        };

        const selectedVehicle = vehicles[vehicle];
        const time = distance / selectedVehicle.speed;
        const fuel = distance / selectedVehicle.efficiency;
        const outOfRange = distance > selectedVehicle.range;

        document.getElementById('time-result').textContent = `Time to travel ${distance} km: ${time.toFixed(2)} hours`;
        document.getElementById('fuel-result').textContent = outOfRange ? 'Out of range' : `Fuel needed: ${fuel.toFixed(2)} liters`;

        // Populate comparison table
        const tbody = document.querySelector('#comparison-table tbody');
        tbody.innerHTML = '';
        for (let vehicleName in vehicles) {
            const v = vehicles[vehicleName];
            const vTime = distance / v.speed;
            const vFuel = distance / v.efficiency;
            const vOutOfRange = distance > v.range;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${vehicleName}</td>
                <td>${vOutOfRange ? 'Out of range' : vTime.toFixed(2)}</td>
                <td>${vOutOfRange ? 'Out of range' : vFuel.toFixed(2)}</td>
            `;
            tbody.appendChild(row);
        }
    } else {
        alert('Please enter a distance and select a vehicle.');
    }
});

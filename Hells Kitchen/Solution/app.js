function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurantsMap = new Map();
      const restaurantsArr = JSON.parse(document.querySelector('textarea').value);

      restaurantsArr.forEach(info => {
         info = info.split(' - ');
         let restaurant = info[0];
         let workersInfo = info[1].split(', ');

         if(!restaurantsMap.has(restaurant))
         {
            restaurantsMap.set(restaurant, []);
         }

         workersInfo.forEach(workerInfo => {
            const [name, salary] = workerInfo.split(' ');
            restaurantsMap.get(restaurant).push({'worker': name, 'salary': Number(salary)});
         });
      });

      let restaurantsRating = [];

      for(const [key, value] of restaurantsMap.entries())
      {
         let averageSalary = 0;
         value.forEach(workerInfo => {
            averageSalary += workerInfo.salary;
         });

         averageSalary /= value.length;

         restaurantsRating.push({'restaurant': key, 'averageSalary': averageSalary});
      }

      restaurantsRating.sort((a, b) => b.averageSalary - a.averageSalary);

      let bestRestaurant = restaurantsRating[0];
      let bestSalary = 0;
      let workersList = [];

      restaurantsMap.get(bestRestaurant.restaurant).forEach(workerInfo => {
         if(workerInfo.salary > bestSalary)
         {
            bestSalary = workerInfo.salary;
         }

         workersList.push(workerInfo);
      });

      let workersListStr = '';
      workersList.sort((a, b) => b.salary - a.salary).forEach(worker => {
         workersListStr += `Name: ${worker.worker} With Salary: ${worker.salary} `;
      });

      document.querySelector("#bestRestaurant p").textContent = `Name: ${bestRestaurant.restaurant} Average Salary: ${(bestRestaurant.averageSalary).toFixed(2)} Best Salary: ${(bestSalary).toFixed(2)} `;
      document.querySelector("#workers p").textContent = workersListStr;
   }
}
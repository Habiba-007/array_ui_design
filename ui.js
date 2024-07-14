

let user_names = [];
let result_html = document.getElementById('result_html')
// let registration_form = document.getElementById('registration_form')

const store_data = () => {

   event.preventDefault();
   let target = event.target
   let user_name = target.user_name.value;
   let mobile_number = target.mobile_number.value;
   let gender = target.gender.value;
   let department = target.department.value;
   let adress = target.adress.value;
   let birth_date = new Date(target.birth_date.value).toDateString();
   
   let attend_classes = target["attend_class"];
    

   let result_obj = {
      user_name,
      mobile_number,
      gender,
      department,
      adress,
      birth_date
   }
   // console.log(result_obj);
   // user_names.unshift(user_name);
   // user_names.unshift(result_obj);
   // render();
   
   // console.log(user_names);
   console.log(attend_classes);

}


function render() {
   let html = user_names.map((items_or_names, index) => {
      return `
            <tr>
               <td>${index + 1}</td>
               <td>${items_or_names.user_name}</td>
               <td>${items_or_names.mobile_number}</td>
               <td>${items_or_names.birth_date}</td>
               <td>${items_or_names.adress}</td>
               <td>${items_or_names.department}</td>
               <td>${items_or_names.gender}</td>
            </tr>
      `;
   })
   result_html.innerHTML = html.join('');
   // console.log('output was:', html.join(''));
}
// render is call back function which have 3 params

 

 

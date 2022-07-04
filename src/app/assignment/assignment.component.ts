import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  answer1: any=[];
  answer2: any=[];
  answer3: any=[];
  answer4: any=[];
  answer5: any=[];
  answer6: any=[];
  answer7: any=[];
  answer8: any=[];
  answer5a: any=[];
  answer5b: any=[];


  constructor() { }

  ngOnInit()  {
    this.question1();
    this.question2();
    this.question3();
    this.question4();
    this.question5(2000);
    this.question6();
    this.question7();
    this.question8();

  }
  question1(){
    let arr =[32,78,12,34,89]; 
    this.answer1 = arr.reverse();
  }

  question2(){
    let arr4 = [
      { name: 'Irvine' },
      { name: 'Malena' },
      { name: 'Anett' },
      { name: 'Evelina' },
      { name: 'Bree' },
      { name: 'Blanch' }
    ]
     this.answer2 =arr4;
      arr4.sort((a,b)=> (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 :
       ((b.name.toLowerCase() < a.name.toLowerCase()) ? 1:0));
    
  }

question3(){
let arr2  =[
  {
    "firstName": "Coop",
    "lastName": "Lenahan"
  },
  {
    "firstName": "Lorenzo",
    "lastName": "Hulbert"
  },
  {
    "firstName": "Shoshanna",
    "lastName": "Elcoux"
  },
  {
    "firstName": "Kellina",
    "lastName": "Tomsen"
  },
  {
    "firstName": "Colver",
    "lastName": "Digg"
  },
  {
    "firstName": "Wayne",
    "lastName": "Bigg"
  },
  {
    "firstName": "Ab",
    "lastName": "Pleming"
  },
  {
    "firstName": "Lavinia",
    "lastName": "Shory"
  },
  {
    "firstName": "Connor",
    "lastName": "Letts"
  },
  {
    "firstName": "Lelah",
    "lastName": "Whines"
  }
]
let names=[];
this.answer3 = arr2;
arr2.forEach((input) => {
let fullName = input.firstName + ' ' + input.lastName;
names.push({name:fullName})
  
});
}

question4()
{
let users = [
  {
    "firstName": "Coop",
    "lastName": "Lenahan"
  },
  {
    "firstName": "Lorenzo",
    "lastName": "Hulbert"
  },
  {
    "firstName": "Shoshanna",
    "lastName": "Elcoux"
  },
  {
    "firstName": "Kellina",
    "lastName": "Tomsen"
  },
  {
    "firstName": "Colver",
    "lastName": "Digg"
  },
  {
    "firstName": "Wayne",
    "lastName": "Bigg"
  },
  {
    "firstName": "Ab",
    "lastName": "Pleming"
  },
  {
    "firstName": "Lavinia",
    "lastName": "Shory"
  },
  {
    "firstName": "Connor",
    "lastName": "Letts"
  },
  {
    "firstName": "Lelah",
    "lastName": "Whines"
  }
]
 let name: string[] =[];
 this.answer4 = users
users.forEach((user) => {

  let fullName = (user.firstName + ' ' + user.lastName);
   
   name.push(fullName);
   

 });
}    

question5(year:number){
let arr3 = [
  {
    carMake: "Audi",
    modelYear: 2002
  },
  {
    carMake: "Jaguar",
    modelYear: 2008
  },
  {
    carMake: "Nissan",
    modelYear: 1991
  },
  {
    carMake: "Land Rover",
    modelYear: 1995
  },
  {
    carMake: "Infiniti",
    modelYear: 2009
  },
  {
    carMake: "Pontiac",
    modelYear: 2007
  },
  {
    carMake: "Dodge",
    modelYear: 1996
  },
  {
    carMake: "Chrysler",
    modelYear: 2012
  },
  {
    carMake: "Lexus",
    modelYear: 2003
  },
  {
    carMake: "Ford",
    modelYear: 1992
  }
]
this.answer5a = arr3;
console.log("answer 5a", this.answer5a)

arr3.forEach((car) => {
  let carMakeYear = car.carMake + ' ' + car.modelYear;
  if (car.modelYear > year) {
   this.answer5b.push({ carMakeYear })
  }console.log("answer 5b", this.answer5b)
  });
}
  
  

question6(){
const transactions=[
  {
    "id": 53,
    "type": "Deposit",
    "date": "7/27/2020",
    "amount": "$290.20"
  },
  {
    "id": 35,
    "type": "Deposit",
    "date": "12/26/2020",
    "amount": "$465.19"
  },
  {
    "id": 51,
    "type": "Deposit",
    "date": "2/4/2020",
    "amount": "$388.66"
  },
  {
    "id": 31,
    "type": "Deposit",
    "date": "11/3/2020",
    "amount": "$35.94"
  },
  {
    "id": 39,
    "type": "Withdrawal",
    "date": "2/17/2020",
    "amount": "$11.61"
  }
];

const transactionsDesc = [
  {
    "id": 51,
    "description": "Description for id: 51"
  },
  {
    "id": 53,
    "description": "Description for id: 53"
  },
  {
    "id": 31,
    "description": "Description for id: 31"
  },
  {
    "id": 39,
    "description": "Description for id: 39"
  },
  {
    "id": 35,
    "description": "Description for id: 35"
  }
]
let mergedtransaction =[];
this.answer6 = transactions;
 mergedtransaction = transactions.map(id =>{
  let othertrans = transactionsDesc.find(element => element.id === id.id)
 return {...id, ...othertrans};
});
}

question7(){
  const transactions=[
  {
    "id": 53,
    "type": "Deposit",
    "date": "7/27/2020",
    "amount": "$290.20"
  },
  {
    "id": 35,
    "type": "Deposit",
    "date": "12/26/2020",
    "amount": "$465.19"
  },
  {
    "id": 51,
    "type": "Deposit",
    "date": "2/4/2020",
    "amount": "$388.66"
  },
  {
    "id": 31,
    "type": "Deposit",
    "date": "11/3/2020",
    "amount": "$35.94"
  },
  {
    "id": 39,
    "type": "Withdrawal",
    "date": "2/17/2020",
    "amount": "$11.61"
  }
];

const transactionsDesc = [
  {
    "id": 51,
    "description": "Description for id: 51"
  },
  {
    "id": 53,
    "description": "Description for id: 53"
  },
  {
    "id": 31,
    "description": "Description for id: 31"
  },
  {
    "id": 39,
    "description": "Description for id: 39"
  },
  {
    "id": 35,
    "description": "Description for id: 35"
  }
]

let money = transactions.filter((bank: any) => {
  const date = new Date(bank.date);  // 2009-11-10

  // Get the month as a number (0-11)
  const month = date.getMonth();
  const year = date.getFullYear();

  if (month === 1) {
    return bank;
  }
});this.answer7 =money
}



 
   question8(){
    let num =[2, 5, 3, 2, 9, 4, 5];
    let uniquenums = num.filter((n , index)=> {
      return num.indexOf(n) === index;
    }); this.answer8= uniquenums;
   }
   
};


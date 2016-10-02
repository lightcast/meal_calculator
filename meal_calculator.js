function Diner(dinerName){
   this.name = dinerName;
   this.dishes = [];
   this.calculateTotal = function(){
     return this.dishes.reduce(function(prev, curr){
         return prev + curr.price
      }, 0);
   };
   this.calculateTax = function(){
      return Math.round(this.calculateTotal() * .075);
   };
   this.calculateTip = function(){
    return Math.round((this.calculateTotal() + this.calculateTax()) * .20);
   };
}



var bill = {
  totalDiners: [],
  printTotalAllDiners: function(){
    console.log("Diners Total Bill:" + this.totalDiners.reduce(function(prev, curr){
        return prev + (curr.calculateTotal() + curr.calculateTax());
    }, 0));
    console.log('\n');
  },
  printTotalDinerTips: function(){
    console.log("Diners Total Tip: " + this.totalDiners.reduce(function(prev, curr){
      return prev + curr.calculateTip();
    },0));
    console.log('\n');
  },
  printDinerBreakdon: function(){
    this.totalDiners.forEach(function(v){
      console.log("Diner's Name:" + v.name);
      console.log("---------------------------");
      console.log("Total: $"+ v.calculateTotal());
      console.log("Tax: $" + v.calculateTax());
      console.log("Tip: $" + v.calculateTip());
      console.log('\n');
    });
  }

};



var jd = new Diner("JD");
jd.dishes.push({dish: "roast beef", price: 10.25});
jd.dishes.push({dish: "garden salad", price: 2.00});

var  stan = new Diner("Stan");
stan.dishes.push({dish: "tukery sandwich", price: 6.45});
stan.dishes.push({dish: "apple pie", price: 4.00});

var tim = new Diner("Tim");
tim.dishes.push({dish: "cesear salad", price: 3.00});
tim.dishes.push({dish: "ice cream", price: 2.00});

bill.totalDiners = [jd, stan, tim];

bill.printTotalAllDiners();
bill.printTotalDinerTips();
bill.printDinerBreakdon();

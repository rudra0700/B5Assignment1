
  
        function formatString(input: string, toUpper?: boolean) : string {
            if(toUpper === true || toUpper === undefined){
                return input.toUpperCase()
            }else{
                return input.toLowerCase()
            }
        }


      
      function filterByRating(items: { title: string; rating: number }[]) : {title: string, rating: number}[]{
        return items.filter(item => item.rating >= 4)
       }

   
      
      function concatenateArrays<T>(...arrays: T[][]): T[] {
            return arrays.reduce((acc, curr) => acc.concat(curr), []);
       }



        class Vehicle {
            private make : string;
            private year : number;

            constructor(make: string, year: number){
                this.make = make;
                this.year = year;
            }

            getInfo(){
                console.log(`"Make: ${this.make}, Year: ${this.year}"`);
            }
        }

        class Car extends Vehicle {
            private model : string;

        constructor(make: string, year: number, model: string){
            super(make, year);
            this.model = model;

        }

            getModal(){
            console.log(`"Model : ${this.model}"`);
        }
    }

   
   
      function processValue(value: string | number): number {
        if(typeof value === "string"){
            return value.length
        }else{
            return value * 2
        }
    }



        interface Product {
            name: string;
            price: number;
        }
   
        function getMostExpensiveProduct(products: Product[]): Product | null{
            if(products.length === 0){
                return null;
            }else{
                return products.reduce((maxPrice, currentProduct) => {
                    return currentProduct.price > maxPrice.price ? currentProduct : maxPrice})
            }
        }

      

        enum Day {
            Monday,
            Tuesday,
            Wednesday,
            Thursday,
            Friday,
            Saturday,
            Sunday
          }
          
          function getDayType(day: Day): string {
             if(day === Day.Monday){
               return "Weekday"
             }else{
                return "Weekend"
             }
          }



          async function squareAsync(n:number) : Promise<number> {
            return new Promise((resolve, reject) => {
                if(n < 0){
                    reject(new Error("Negative number is not allowed"))
                }else{
                    setTimeout(() => {
                        resolve(n * n)
                    }, 1000);
                }
            })
        }


     


import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


   const PriceOptions =  [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open during staffed hours only"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "features": [
            "24/7 access to gym",
            "Locker room access with shower",
            "Free fitness assessment"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 79.99,
          "features": [
            "24/7 access to gym and spa",
            "Personal trainer (2 sessions per month)",
            "Free fitness classes"
          ]
        },
        {
          "id": 4,
          "name": "Family Plan",
          "price": 99.99,
          "features": [
            "Access for up to 4 family members",
            "Discounts on personal training",
            "Free kids' fitness sessions"
          ]
        },
        {
          "id": 5,
          "name": "VIP Plan",
          "price": 149.99,
          "features": [
            "Unlimited personal training",
            "Access to VIP lounge and sauna",
            "Priority booking for classes and events"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                PriceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;
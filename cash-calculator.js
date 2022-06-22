// Find the number of cents that a customer is owed and then print the smallest number of coins with which that change can be made.

let cents; 

// Calculate quarters:
function calculate_quarters(cents)
{
    let quarters = cents / 25;
    return quarters;
}

// Calculate dimes:
function calculate_dimes(cents)
{
    let dimes = cents / 10;
    return dimes;
}

// Calculate nickels:
function calculate_nickels(cents)
{
    let nickels = cents / 5;
    return nickels;
}

// Calculate pennies:
function calculate_pennies(cents)
{
    let pennies = cents / 1;
    return pennies;
}


// Calculate the number of quarters to give the customer
    let quarters = calculate_quarters(cents);
    cents = cents - quarters * 25;

    // Calculate the number of dimes to give the customer
    let dimes = calculate_dimes(cents);
    cents = cents - dimes * 10;

    // Calculate the number of nickels to give the customer
    let nickels = calculate_nickels(cents);
    cents = cents - nickels * 5;

    // Calculate the number of pennies to give the customer
    let pennies = calculate_pennies(cents);
    cents = cents - pennies * 1;

    // Sum of coins:
    let coins = quarters + dimes + nickels + pennies;

    // Print total number of coins to give the customer:
    console.log(coins);
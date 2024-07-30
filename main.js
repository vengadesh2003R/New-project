function calculation() {

    // Error Alerts

    // let allAmountBox = document.getElementsByClassName("allNum").value;
    // if (isNaN(document.getElementsByClassName("allNum").value)) 
    // {
    //         alert("Enter a valid number!")
    // }
    // else {

    // }
    
    // Assigning all the expences

    let foodCost = Number(document.getElementById("food").value);
    let rentCost = Number(document.getElementById("rent").value);
    let clothCost = Number(document.getElementById("cloth").value);

    // Counting all the expences

    let totalCost = foodCost + rentCost + clothCost;
    document.getElementById("expences").value = totalCost;

    // Remaining the expences including costs

    let mainBalance = Number(document.getElementById("income").value);
    let remBalance = mainBalance - totalCost;

    // Calculating saving rates and amounts

    let savingRate = Number(document.getElementById("save-percent").value);
    let savingAmount = (mainBalance * savingRate) / 100;

    // Remaining after all the expences including savings

    document.getElementById("savebox").value = savingAmount;
    remBalance = remBalance - savingAmount;
    document.getElementById("rem-bal").value = remBalance;
}
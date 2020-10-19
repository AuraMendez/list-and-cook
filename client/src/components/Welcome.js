import React from 'react';

function Welcome () {
    return (
        <div>
            <h1>Welcome to <strong>List&Cook</strong>!</h1>
            <p>This app will hopefully make your life a tiny bit easier.</p>
            <div className="instructions">
                <p><strong>Here are the instructions:</strong></p>
                <ol>
                    <li>Browse through the recipes. You can see them all at once, or filter using common tags (such as 'vegetarian', 'vegan', 'soup', 'salad', etc.).</li>
                    <li>Select the recipes you like and add them on the day of the week where you'd like to cook it. You can do this by clicking on the 'copy' icon to the right of each recipe (this will copy that recipe's unique id to your clipboard), pasting it on the day of your choice and press 'enter' or the plus button</li>
                    <li>Once you have selected your menu for the whoile week, got to the tab 'Generate shopping list' and click on the button. Your shopping list should appear on the screen!</li>
                </ol>
            </div>
            
        </div>
      
    )
  }
  
  export default Welcome;
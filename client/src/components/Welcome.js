import React from 'react';

function Welcome() {
    return (
        <div>
            <h1>Welcome to <strong>List&Cook</strong>!</h1>
            <p>This app will hopefully make your life a tiny bit easier.</p>
            <div className="instructions">
                <p><strong>Here are the instructions:</strong></p>
                <ol>
                    <li>Browse through the recipes. You can see them all at once, or filter using common tags (such as &apos;vegetarian&apos;, &apos;vegan&apos;, &apos;soup&apos;, &apos;salad&apos;, etc.).</li>
                    <li>Select the recipes you like and add them on the day of the week where you&apos;d like to cook it. You can do this by clicking on the &apos;copy&apos; icon to the right of each recipe (this will copy that recipe&apos;s unique id to your clipboard), pasting it on the day of your choice and press &apos;enter&apos; or the plus button</li>
                    <li>Once you have selected your menu for the whoile week, got to the tab &apos;Generate shopping list&apos; and click on the button. Your shopping list should appear on the screen!</li>
                </ol>
            </div>

        </div>

    )
}

export default Welcome;
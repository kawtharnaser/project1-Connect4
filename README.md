# Connect4 Project


Connect4 is a fun strategic board game🎯 that you get to play with a friend. Start by choosing the position of your coin. By clicking on your desired position, the coin will fall right in to the board. Switch turns after each click, and try to get 4 coins of your color in a row - horizontally / Vertically / Diagonally - to win🥇! Make sure to block the other player's moves!


link to my live site:


My Approach / functionalities :
The game board first gets generated with a game status box that shows which player's turn it is. All the circles within the board are wrapped with an event listener that listens for a click event. Whenever the user clicks on any circle, the bottom most circle within the same column gets populated with the coin representing that player. Turns switch after each click event, and winning conditions are checked to show a winner. In the case that there is no winner, the game continues. Otherwise, the winner's name gets displayed in a game status box, and a restart button appears to play again.


Technologies used:
Design: Figma
Code:
HTML
CSS
JS


Wireframes:

![connect4Wireframe](https://user-images.githubusercontent.com/102879553/194263606-f9e3981c-915f-41c9-afc5-937bda3acc07.png)



Unresolved problems:
After the user wins and the restart button appears, and the user clicks on the Restart button, the following issue happens: the Restart button keeps generating whenever the user clicks on any circle element within the board
the CSS isnt as I exactly planned..
If I had more time I would solve these issues.


Sources:
W3Schools






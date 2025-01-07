import "../src/style.css";
import Swal from "sweetalert2";

var tasks = [
    {
        id: 1,
        title: "Task #1",
        description: "Write a JavaScript program using a for loop to print numbers from 1 to 10.",
        task: function task(){
            for (let i = 1; i <= 10; i++) {
                console.log(i);
            }
        }
    },
    {
        id: 2,
        title: "Task #2",
        description: "Write a JavaScript program using a while loop to calculate and print the sum of the first 10 natural numbers.",
        task: function task(){
            let sum = 0;
            let i = 1;
            while (i <= 10) {
                sum += i;
                i++;
            }
            console.log(sum);
        }
    },
    {
        id: 3,
        title: "Task #3",
        description: "Write a JavaScript program using a do...while loop to display the multiplication table of 5.",
        task: function task(){
            let i = 1;
            do{
                console.log(`5 x ${i} = ${5 * i}`);
                i++;
            }while (i <= 12);
        }
    },
    {
        id: 4,
        title: "Task #4",
        description: "Write a JavaScript program using a for loop to calculate and print the factorial of 5.",
        task: function task(){
            let result = 1;
            for (let i = 1; i <= 5; i++) {
                result *= i;
            }
            console.log(result);
        }
    },
    {
        id: 5,
        title: "Task #5",
        description: "Write a JavaScript program using a while loop to check if a number (e.g., 29) is a prime number and display the result.",
        task: function task(){
            let num = 29;
            let isPrime = true;
            let i = 2;
            while (i <= Math.sqrt(num)) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
                i++;
            }
            if (isPrime) {
                console.log(`${num} is a prime number.`);
            } else {
                console.log(`${num} is not a prime number.`);
            }
        }
    },
    {
        id: 6,
        title: "Task #6",
        description: "Write a JavaScript program using a do...while loop to count the number of digits in a given number (e.g., 12345).",
        task: function task(){
            let num = 12345;
            let count = 0;
            do {
                count++;
                num /= 10;
            } while (num >= 1);
            console.log(`The number has ${count} digits.`);
        }
    },
    {
        id: 7,
        title: "Task #7",
        description: "Write a JavaScript program using a for loop to print all odd numbers from 1 to 20.",
        task: function task(){
            for (let i = 1; i <= 20; i += 2) {
                console.log(i);
            }
        }
    },
    {
        id: 8,
        title: "Task #8",
        description: "Write a JavaScript program using a while loop to reverse the digits of a number (e.g., 1234).",
        task: function task(){
            let num = 1234;
            let reversedNum = 0;
            while (num > 0) {
                reversedNum = (reversedNum * 10) + (num % 10);
                num = Math.floor(num / 10);
            }
            console.log(reversedNum);
        }
    },
    {
        id: 9,
        title: "Task #9",
        description: "Write a JavaScript program using a do...while loop to calculate and print the result of 2 raised to the power of 5 (i.e., 252^525)",
        task: function task(){
            let result = 1;
            let power = 525;
            do {
                result *= 2;
                power--;
            } while (power > 0);
            console.log(result);
        }
    },
    {
        id: 10,
        title: "Task #10",
        description: "Write a JavaScript program using nested for loops to print the following pattern ",
        task: function task(){
            for (let i = 0; i < 5; i++) {
                console.log("*".repeat(i + 1));
            }
        }
    },
    {
        id: 11,
        title: "Task #13",
        description: "Write a JavaScript program using a for loop to print all multiples of 3 between 1 and 30.",
        task: function task(){
            for (let i = 1; i <= 30; i += 3) {
                console.log(i);
            }
        }
    },
    {
        id: 12,
        title: "Task #12",
        description: "Write a JavaScript program using a while loop to calculate the sum of all even numbers from 1 to 50.",
        task: function task(){
            let sum = 0;
            let i = 2;
            while (i <= 50) {
                sum += i;
                i += 2;
            }
            console.log(sum);
        }
    },
    {
        id: 13,
        title: "Task #13",
        description: "Write a JavaScript program using a do...while loop to create a countdown timer starting from 10 down to 1, printing each number.",
        task: function task(){
            let countdown = 10;
            do {
                console.log(countdown);
                countdown--;
            } while (countdown >= 1);
            console.log("Countdown completed!");
        }
    },
    {
        id: 14,
        title: "Task #14",
        description: "Write a JavaScript program using a for loop to check if a given number (e.g., 28) is a perfect number. A perfect number is one where the sum of its divisors (excluding itself) equals the number.",
        task: function task(){
            let num = 28;
            let sum = 0;
            for (let i = 1; i < num; i++) {
                if (num % i === 0) {
                    sum += i;
                }
            }
            if (sum === num) {
                console.log(`${num} is a perfect number.`);
            } else {
                console.log(`${num} is not a perfect number.`);
            }
        }
    },
    {
        id: 15,
        title: "Task #15",
        description: "Write a JavaScript program using a while loop to print the square of numbers from 1 to 10.",
        task: function task(){
            let i = 1;
            while (i <= 10) {
                console.log(i * i);
                i++;
            }
        }
    }
    ];

function initializeTask(tasks) {
    for (let i = 1; i < tasks.length + 1; i++) {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (i === 1) {
            item.classList.add('active');
        }
        item.innerHTML = `
        <div style="height: auto">
        <h2>${i}. ${tasks[i - 1].title}</h2>
            <div class="col-12">
              <p>${tasks[i -1].description}</p>
              <div class="editor" id="editor${i}">some</div>
              <div class="container-fluid">
                <h4>Logs</h4>      
                <div id="logs${i}"></div>
              </div>
              <br>
              <div> 
                <button id="formatCode${i}" class="btn btn-info">Format Code</button>
                <button id="clearCode${i}" class="btn btn-danger">Clear</button>
                <button id="runButton${i}" class="btn btn-primary">Run</button>
              </div> 
            </div>
        </div>
    `;
        const logs = [];
        const dom = document.getElementById('carousel-inner');
        dom.appendChild(item);

        const editor = ace.edit(`editor${i}`);
        editor.session.setMode("ace/mode/javascript");
        const beautify = ace.require("ace/ext/beautify");
        // Auto height adjustment
        editor.setOptions({
            minLines: 5, // Minimum visible lines
            maxLines: Infinity // Automatically adjust height to fit content
        });

        // Optional: Disable vertical scrolling
        editor.renderer.setScrollMargin(0, 0);
        editor.renderer.setShowGutter(true); // Show line numbers
        editor.setAutoScrollEditorIntoView(true);

        editor.setValue(tasks[i - 1].task.toString().match(/\{([\s\S]*)\}/)[1].trim());
        beautify.beautify(editor.session);

        document.getElementById(`formatCode${i}`).addEventListener("click", () => {
            beautify.beautify(editor.session);
        });

        document.getElementById(`clearCode${i}`).addEventListener("click", () => {
            editor.setValue("");
            document.getElementById(`logs${i}`).innerHTML = ""; // Clear the logs
            Swal.fire({
                icon: 'success',
                title: 'Editor Cleared',
                text: 'The editor content and logs have been cleared.'
            });
        });

        document.getElementById(`runButton${i}`).addEventListener('click', () => {
            const code = editor.getValue();
            const logs = [];

            console.log = function (...args) {
                logs.push(args.join(' '));
            };

            try {
                eval(code);
                document.getElementById(`logs${i}`).innerHTML = logs.map((log, idx) => `
                    <p class="bg-info text-black" style="font-size: 12px"><span class="badge bg-info">${idx + 1}</span>${log}</p>
                `).join('');
                Swal.fire({
                    icon: 'success',
                    title: 'Execution Successful',
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Execution Error',
                    text: error.message
                });
            }
        });

    }
}

initializeTask(tasks);

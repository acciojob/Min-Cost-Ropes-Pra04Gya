function calculateMinCost() {
      const input = document.getElementById("inputArray").value;
      const arr = input.split(',').map(str => parseInt(str.trim())).filter(n => !isNaN(n) && n > 0);

      const resultEl = document.getElementById("result");

      if (arr.length < 2) {
        resultEl.innerText = "Please enter at least two valid positive integers.";
        return;
      }

      const minCost = getMinCost(arr);
      resultEl.innerText = "✅ Minimum cost to connect ropes: " + minCost;
    }

    function getMinCost(arr) {
      let heap = [...arr];
      heap.sort((a, b) => a - b);

      let totalCost = 0;

      while (heap.length > 1) {
        const first = heap.shift();
        const second = heap.shift();
        const cost = first + second;
        totalCost += cost;

        heap.push(cost);
        heap.sort((a, b) => a - b);
      }

      return totalCost;
    }
export function dijkstra(grid, startNode, targetNode) {
  const path = [];
  const row = grid.length, col = grid[0].length;
  const dist = Array(row * col).fill(0x3f3f3f);
  const visited = Array(row * col).fill(false);
  dist[startNode.x * col + startNode.y] = 0;

  for (let i = 0; i < row * col; i++) {
    let x = -1;
    for (let k = 0; k < row * col; k++) {
      if (!visited[k] && (x === -1 || dist[k] < dist[x])) {
        x = k;
      }
    }

    if (dist[x] === 0x3f3f3f) { 
      return [path, visited];
    }

    const tmpPoint = [Math.floor(x / col), Math.floor(x % col)];
    if (grid[tmpPoint[0]][tmpPoint[1]].isWall) {
      continue;
    };

    visited[x] = true;
    if (grid[tmpPoint[0]][tmpPoint[1]] === targetNode) { 
      return [path, visited];
    }

    path.push(grid[tmpPoint[0]][tmpPoint[1]]);
    const neighbors = getUnvisitedNeighbors(grid[tmpPoint[0]][tmpPoint[1]], grid, visited);
    for (let j = 0; j < neighbors.length; j++) {
      const node = neighbors[j];
      let idx = node.x * col + node.y;
      if (dist[x] + 1 < dist[idx]) {
        if (node !== grid[tmpPoint[0]][tmpPoint[1]]) node.previousNode = grid[tmpPoint[0]][tmpPoint[1]];
        dist[idx] = dist[x] + 1;
      }
    }
  }

  return [path, visited];
}

function getUnvisitedNeighbors(node, grid, visited) {
  const neighbors = [];
  const { x, y } = node;
  const row = grid.length, col = grid[0].length;
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  for (let i = 0; i < 4; i++) {
    const new_x = x + directions[i][0];
    const new_y = y + directions[i][1];
    if (0 <= new_x && new_x < row && 0 <= new_y && new_y < col) {
      if (!visited[new_x * col + new_y] && !grid[new_x][new_y].isWall) {
        neighbors.push(grid[new_x][new_y]);
      }
    }
  }
  return neighbors;
}

export function getShortestPath(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}


 
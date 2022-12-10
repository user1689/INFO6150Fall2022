export function mazeGenerator(grid, startNode, targetNode) {
  const row = grid.length, col = grid[0].length;
  const min = 0, max = row * col - 1;
  
  const tmpGrid = Array.from(Array(row), () => Array(col).fill(1));
  const directions = [[0, -1],[1,0],[0,1],[-1,0]];
  const directions_special = [[0, -1],[1,0],[0,1],[-1,0],[-1,-1],[1,1],[1,-1],[-1,1]];

  const uf = new UF(row * col)
  for (let i = 0; i < 8; i++) {
    const x = startNode.x;
    const y = startNode.y;
    const new_x = x + directions_special[i][0];
    const new_y = y + directions_special[i][1];

    if (0 <= new_x && new_x < row && 0 <= new_y && new_y < col) {
      tmpGrid[x][y] = 0;
      tmpGrid[new_x][new_y] = 0;
      uf.union((x*col+y), (new_x*col+new_y));
    }
  }

  for (let i = 0; i < 8; i++) {
    const x = targetNode.x;
    const y = targetNode.y;
    const new_x = x + directions_special[i][0];
    const new_y = y + directions_special[i][1];

    if (0 <= new_x && new_x < row && 0 <= new_y && new_y < col) {
      tmpGrid[x][y] = 0;
      tmpGrid[new_x][new_y] = 0;
      uf.union((x*col+y), (new_x*col+new_y));
    }
  }

  while (uf.find(startNode.x*col+startNode.y) !== uf.find(targetNode.x*col+targetNode.y)) {
    const one_d_idx = Math.floor(Math.random() * (max - min + 1)) + 0;
    const x = Math.floor(one_d_idx / col);
    const y = Math.floor(one_d_idx % col);
    for (let i = 0; i < 4; i++) {
      const new_x = x + directions[i][0];
      const new_y = y + directions[i][1];
      if (0 <= new_x && new_x < row && 0 <= new_y && new_y < col) {
        tmpGrid[x][y] = 0;
        tmpGrid[new_x][new_y] = 0;
        uf.union((x*col+y), (new_x*col+new_y));
      }
    }
  }
  
  return tmpGrid;
}

export class UF {
  
  constructor(n) {
    this.valid = true;
    this.szie = n;
    this.p = Array(n);
    for (let i = 0; i < this.p.length; i++) {
      this.p[i] = i;
    }
    this.wall = Array(n).fill(false);
  }

  union(a, b) {
    let parentA = this.find(a);
    let parentB = this.find(b);
    if (parentA !== parentB) {
      this.p[parentA] = parentB;
      
    } 
  }

  find(x) {
    if (x !== this.p[x]) {
      this.p[x] = this.find(this.p[x]);
    }
    return this.p[x];
  }

}
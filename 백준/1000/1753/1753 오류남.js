// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `5 6
//     1
//     5 1 1
//     1 2 2
//     1 3 3
//     2 3 4
//     2 4 5
//     3 4 6`
// ).split('\n');

// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// const [V, E] = input().trim().split(' ').map(v => parseInt(v));
// const START_POINT = parseInt(input().trim());
// const arr = new Array(V + 1).fill(null).map(_ => new Array());
// const result = new Array(V + 1).fill(Infinity);
// const visited = new Array(V + 1).fill(false);

// for (let i = 0; i < E; i++) {
//     const [u, v, w] = input().trim().split(' ').map(v => parseInt(v));
//     arr[u].push([v, w]);
// }
// // console.log(arr)
// // console.log(result)


// const getSmallIndexOfArr = () => {
//     let minValue = Infinity;
//     let idx = -1;
//     for (let i = 1; i <= result.length; i++) {
//         if (visited[i] === false && minValue > result[i]) {
//             minValue = result[i];
//             idx = i;
//         }
//     }
//     return idx;
// }

// const dijkstra = () => {
//     result[START_POINT] = 0;
//     visited[START_POINT] = true;
//     for (let [d, w] of arr[START_POINT]) {
//         result[d] = w;
//     }
//     for (let i = 0; i < V - 1; i++) {
//         const nowPoint = getSmallIndexOfArr();
//         visited[nowPoint] = true;
//         if (nowPoint === -1) continue;
//         for (let [d, w] of arr[nowPoint]) {
//             const SUM_W = result[nowPoint] + w;
//             if (result[d] > SUM_W) {
//                 result[d] = SUM_W;
//             }
//         }
//     }
// }

// dijkstra();

// for (let i = 1; i < result.length; i++) {
//     if (result[i] === Infinity) console.log("INF");
//     else console.log(result[i]);
// }

function createGraphByList(num, edges) {
    const _edges = {};
    for (let i = 1; i <= num; i++) _edges[i] = [];
    edges.forEach(([src, dst, weight]) => {
        _edges[src].push({ node: dst, weight: weight });
        _edges[dst].push({ node: src, weight: weight });
    });
    return _edges;
}

function createGraphByMatrix(num, edges) {
    const matrix = [];
    const INF = 101;
    for (let i = 0; i <= num; i++) {
        matrix.push(Array(num + 1).fill(INF));
        matrix[i][i] = 0;
    }
    edges.forEach(([src, dst, weight]) => {
        matrix[src][dst] = matrix[dst][src] = weight;
    });
    return matrix;
}

// 인접 행렬을 통한 구현: O(V^2)
// V는 정점의 개수
function Dijkstra(num, edges, start, end) {
    // 그래프를 생성한다.
    const matrix = createGraphByMatrix(num, edges);
    const dist = matrix[start].slice();
    const visited = Array(num + 1).fill(false);
    visited[start] = true;
    const before = Array(num + 1).fill(-1);

    // 출발 정점에서 바로 가는 경로가 존재하는 정점은
    // 출발 정점이 최단 경로 상의 직전 정점이라고 가정한다.
    edges.forEach(([src, dst]) => {
        if (src === start) before[dst] = src;
        if (dst === start) before[src] = dst;
    });

    // 아직 최단 거리 계산이 안 된 정점들 중에서
    // 출발 정점과의 거리가 가장 짧은 정점을 리턴한다.
    const getNextNearestIdx = (dist) => {
        let min = Number.MAX_SAFE_INTEGER;
        for (i = 1; i <= num; i++) {
            if (dist[i] < min && visited[i] === false) {
                min = dist[i];
                target = i;
            }
        }
        return target;
    };

    // 출발 정점은 이미 계산된 상태이므로 1개를 제외하고
    // 매 루프를 통해서 (다음으로) 출발 정점과의 거리가 가장 짧은 정점이 계산되므로
    // 총 루프의 회수는 num - 2 이다.
    for (let round = 0; round < num - 2; round++) {
        // 현재 시점에서 출발 정점까지의 거리가 가장 짧은 정점(v1)은
        // 이미 계산이 완료되었다고 볼 수 있다.
        // 다른 정점(v2)은 출발 정점과의 거리가 v1에 비해 길고 (v1이 가장 짧은 거리를 가졌으므로)
        // 따라서 다른 정점을 통해 v1으로 가는 경로가 더 길 수 밖에 없다.
        const nearest = getNextNearestIdx(dist);
        // 이미 계산이 된 정점을 중복해서 고려할 필요가 없기 때문에 표시를 한다
        visited[nearest] = true;
        visited.forEach((calculated, v) => {
            // 계산이 완료된 정점은 보지 않아도 된다.
            if (calculated === false) {
                // 현재 시점에서 출발 정점과 (이미 계산된 정점을 제외하고 다음으로)
                // 가장 가까운 정점(nearest)을 기준으로
                // nearest를 통해서 가는 방법이 기존의 방법보다 좋으면, 즉 더 짧으면
                // 더 짧은 거리로 갱신한다.
                // 알 수 있는 사실: 최단경로의 부분 경로 역시 최단경로이다.
                if (dist[nearest] + matrix[nearest][v] < dist[v]) {
                    dist[v] = dist[nearest] + matrix[nearest][v];

                    // 최단 경로가 갱신되므로, 정점 v에 도달하는 최단 경로 상에서
                    // 바로 직전 정점은 nearest 이다.
                    before[v] = nearest;
                }
            }
        });
    }

    // 최단 경로를 end 부터 역추적한다.
    function getPath(before, start, end) {
        let vertex = before[end];
        const path = [end, vertex];
        while (vertex !== start) {
            vertex = before[vertex];
            path.push(vertex);
        }
        return path.reverse();
    }
    const path = getPath(before, start, end);

    return dist[end];
}
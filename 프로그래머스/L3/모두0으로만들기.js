function solution(a, edges) {
    const graph = new Array(a.length+1).fill(null).map(_=>[]);
    for(let [a,b] of edges){
        graph[a].push(b);
        graph[b].push(a);
    }
    const bfs = () =>{
        let answer = 0n;
        const visited = new Array(a.length).fill(false);
        const q = [[0,-1]];
        while(q.length > 0){
            const [child,parent] = q.pop();
            if(visited[child] === true){
                a[parent] += a[child];
                answer += BigInt(Math.abs(a[child]));
            }
            else{
                visited[child] = true;
                q.push([child,parent]);
                for(let i of graph[child]){
                    if(visited[i] === false){
                        q.push([i,child]);
                    }
                }
            }
        }
        return a[0] === 0 ? answer : -1;
    }
    return bfs();
}
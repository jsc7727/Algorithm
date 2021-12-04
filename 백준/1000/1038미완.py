from itertools import combinations
c = int(input())
result = sorted([
    int(
        "".join(
            map(str,
                sorted(list(comb), reverse=True)
                )
        )
    )
    for i in range(1, 11)
    for comb in combinations(range(0, 10), i)
])
if len(result) < c:
    print(-1)
else:
    print(result[c])

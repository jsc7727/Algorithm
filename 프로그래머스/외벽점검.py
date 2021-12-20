# https://programmers.co.kr/learn/courses/30/lessons/60062


from collections import deque
from typing import NewType
n = 12
weak = [1, 5, 6, 10]
dist = [1, 2, 3, 4]
for i in range(len(weak)):
    weak.append(weak[i]+n)
print(weak)
result = []


# def recursive(w, d):
#     if len(w) == 0 or len(d) == 0:
#         print("펑 : ", w, d)
#         return
#     global result
#     for wl in range(len(w)):
#         for dl in range(len(d)):
#             temp = ((w[wl]+d[dl]) % n)
#             # print(temp, weak)
#             temp2 = list(filter(lambda x: (x != w[wl] and x <= temp), weak))
#             print("t2", temp2)
#             if len(temp2) > 0:
#                 print(w[wl], d[dl], w, d)
#                 nw = w[:wl]+w[(wl+1):]
#                 nd = d[:dl]+d[(dl+1):]
#                 recursive(nw, nd)





# recursive(weak, dist)

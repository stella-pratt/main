num = ""
final_print = []
while num != 9999999:
    answer = input("Recipe title: ").lower()
    num = int(input("Page number: "))
    final_print.append(answer)
    final_print.append(num)
    print(final_print)

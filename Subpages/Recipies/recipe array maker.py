names = []
category = []
number = []
count = 0

cat = input("Category: ")

while True:
    recipe = input("Recipe name: ").lower()
    num = int(input("Num: "))
    names.append(recipe)
    number.append(num)
    category.append(cat)
    print(names)
    print(category)
    print(number)


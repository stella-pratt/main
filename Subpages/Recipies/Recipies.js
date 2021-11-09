const recipe_name = ['tagine of lamb with prunes & ras el hanout', 'spiced lamb & double tomato couscous salad', 'roasted lamb racks with salad of butternut pumpkin, olives, rocket & tomatoes', 'anchovy & almond crusted lamb racks', 'nadi', 'butterflied leg of lamb with roasted vegetables & yoghurt with sesame', 'braised lamb shanks with oxtail ragout', 'paprika-spiced lamb', 'roast leg of lamb in an anchovy crust', 'butterflied leg of lamb', 'leg of lamb romagna style', 'roasted rack of lamb with provencal coat confit of vegetables with honey, cumin & mint', 'rack of lamb with anchovy & lemon crust & warm spinach, tomato & cannellini bean salad', 'harira', 'angello alla pugliese con salsa verde di maria pia', 'prvencal-style leg of lamb with tomatoes & olives', 'lamb & apricot tagine', 'styffed lamb shoulder', 'marinated boned leg of lamb', 'spiced lamb with prunes', 'roasted lamb rump with spicy carrot puree, couscous & pine nut ciabatta sauce', 'lamb tagine', 'spice rubbed, slow roasted leg of lamb', 'thyme and bay leaf roasted rack of veal', 'braised veal shanks with pumpkin puree & fried greens', 'braised lamb with white beans', 'roast lamb rack with mint & cucmuber salsa & potato salad', 'penne with lamb ragu', 'braised shoulder of lamb in a saffron broth', 'butterflied leg of lamb with pecorino and herbs', 'lamb steaks with herbed potato & feta fritters & fresh tomato sauce', "shepherd's pie", 'lamb hotpot', 'roasted eye fillet with tomato chermoula', 'carpet-bag steak with spinach & lemon beurre blanc', 'roast eye fillet of beef with balsamic jus & baby vegetables', 'eye fillet with rich mushroom sauce & blue cheese mash', 'bearnaise sauce', 'warm sliced eye fillet of beef with roasted shallot mayonnaise & tomato salad', 'polenta with meat sauce', 'rib eye roast with moroccan flavours', 'beef fillet & soft polenta with wild mushrooms & pecorino', 'fillet of beef bourguignon-style with horseradish mashed potato & wilted rainbow chard', 'barbecued herbed scotch fillet of beef', 'classic beef & mushroom stew with potato gnocchi', 'mediterranean-style eye fillet of beef', 'fillet of beef on tomato fondue with basil & artichoke dressing', 'spiced beef with two sauces', 'ten minute beef stroganoff', 'angus steak au poivre with red wine butter & sauteed potatoes', 'braised beef in barbera', 'beef fillet with couscous salad & tomato yoghurt salsa', 'fillet of beef in pastry with mushroom duxelles', 'peppered eye fillet with pecorino and herb dressing', 'beef fillet with mushroom dexelles', 'oxtail ragu with handkerchief pasta & parmigiano-reggiano', 'eye fillet steak stuffed with caramelised shallots & anchovies with hand cut fries', "braised skirt steak with wild mushrooms, wet polenta & goat's cheese", 'beef goulash with parsley dumplings', 'panfried skirt steak with green tomatoes, green peppercorns, brandy & cream', 'roasted crushed salty new potatoes', 'anchovy dressing', 'beef short ribs with porcini mushrooms', 'roasted rib eye of beef', 'grilled sirloin with mustard greens, walnuts, blue cheese & shiraz syrup', 'roast pork loin with five spice, orange & lemon zest & crunchy crackling', 'rack of pork with red wine glaze', 'pork fillet with juniper, celeriac puree & watercress', 'cider and lime spare ribs', 'roasted pork with caramelised pears, chestnuts, celeriac puree & apple aioli', 'stuffed and rolled roast pork', 'pork scallopine and parmesan potatoes', 'pork rib roast with oranges & red onions', 'baked ham with brown sugar & mustard glaze', 'asian pork burgers', 'glazed pork spareribs', 'pork scallopine with feta and pine nuts', 'toad in the hole with dark ale roasted onions', 'pork fillet and roasted vegetable salad with honey baked apples', "cibo's roast duck with roast beetroot confit, zefatit cheese, watercress & vincotto", 'spiced braised duck with bok choy', 'duck with oranges, lemons & red wine vinegar glaze', 'pan-fried chicken breast with gazpacho sauce', 'spicy turkey patties with sweetcorn salsa', 'barbecued chcken salad', 'barbecued jerk chicken', 'green curry with potato and coconut', 'roast rabbit with apples, cider & mustard', 'chicken & burghul salad', 'roast duck with pomegranate molasses & rice pilaf', 'roast chicken with lemon & rosemary', 'chicken fricassee', 'pot-roasted poussins with pancetta, chestnuts & cannellini bean smash', 'roast chicken stuffed spago style with ricotta', 'twice cooked duck with orange', 'chicken and vegtable pies', 'duck breast, cherries & braised new potatoes', 'chicken rags with artichokes, lemon and pasta', 'egg-dipped fish with asparagus, tomato & rocket salad & lemon mayonnaise', 'slow-roast salmon with fennel bulb, capers & almonds', 'syrian fish', 'smoked fish salad', 'bouillabaisse', 'fish & potato curry with red cargo rice & almonds', 'fish curry', 'barbequed fish fillets with moroccan spices', 'fresh fish with parsnip mash, grapefruit, olives & citrus vinaigrette', 'psari plaki', 'coconut lemon fish', 'spicy wallnut-encrusted fish with orange & parsley salad', 'baccala con i peperoni', 'seared tuna carpaccio with chilli sesame dressing', 'grilled fish fillets with a salad of cucumber, celery, dates, roasted red capsicums & walnuts', 'marinated & griled fish with carrot, white bean & coriander salad', 'pan-fried fish with lemon, capers and tomato', 'salmon en croute with parsley and pecan butter', 'crispy fish and couscous salad', 'tarakihi tortillas', 'roasted salmon fillet with latkes, baby beets & horseradish cream', 'cured salmon with new potatoes and asparagus', 'market fish with crushed potatoes and herb dressing', 'warm tuna salad', 'whole baked snapper', 'simple fish bouillabaisse', 'snapper, potato & porcini al cartoccio', 'sicilian fish couscous', 'tuna kebabs with olive & caper salsa', "zucchini, mint and goat's cheese pizza", 'broccoli and anchovy orecchiette', 'spanakopita', 'stracci with pesto & peas', 'farfalle with peas & tomato', 'boyds asaparagus frittata', 'rigatoncini with chilli & rosemary tomato sauce', 'caponata', 'braised ratatouille', 'risotto with lemon & fennel', 'risotto with garden greens and bacon', 'roman risotta', 'frijoles con queso', 'twice-baked spinach souffles woth baked field mushrooms', 'pasta with fetta and roasted vegetables', 'bacon and mushroom stuffed potatoes', 'eggs en cocotte', 'greek omelette with spinach, feta and dill', 'frittata - open faced omelettes', 'ricotta gnocchi with italian sausage and tomato sauce', 'baked tomato, olive & capsicum salad', 'ragu with rigatoni', 'store cupboard sauce and pasta', "dunsandel store's macaroni cheese", "mushroom pies with goat's cheese & pine nuts", 'paella', 'pork & fennel sausage orecchiette', "spaghetti with schwed's snowbeans & pesto", 'pasta with sicilian sauce', 'pork sausage, silverbeet and red onion pasta', 'baked penne with sausages and spinach', 'fettucine with mince & veges', 'classic dough for pizza or bread sticks (grissini)', 'swiss brown caps with walnuts & blue cheese on tagliatelle', 'spaghetti with anchovies & greens with butter crumbs', 'honey glazed roasted root vegetables', 'peas with feta, mint & olive oil', 'green bean and asparagus salad', 'potatoes, kumara and carrots roasted in herd and garlic butter with sour cream dressing', 'new potatoes with herb mayonnaise', 'mushrooms with garlic & sherry', 'roasted pumpkin, celery, coriander & paprika', 'roast kumara with apple, maple syrup & mint', 'gilled eggplant with garlic, wine & tomatoes', 'swede mash with roasted garlic', 'roasted cajun kumara', 'gratin dauphinois', 'carrots & snow peas in a cumin glaze', 'summer green salad', 'asparagus, shaved fennel and pecorino with lemon-basil vinaigrette', 'roast potatoes', 'potato mash', 'apsaragus carpaccio']
const recipe_category = ['lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'lamb', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'beef', 'pork', 'pork', 'pork', 'pork', 'pork', 'pork', 'pork', 'pork', 'pork', 'pork', 'pork', 'pork', 'pork', 'pork', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'poultry', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'fish', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vegetarian', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege', 'vege']
const recipe_number = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187]
const starred_recipes = []

function search(data) {
    search_term = document.getElementById("search_box").value.toLowerCase()
    search_category = document.getElementById("type").value
    const search_results = []
    const search_results_num = []
    const search_results_category = []


    if (search_category==="any"){
        for (let i = 0; i < recipe_name.length ; i++) {
            if (recipe_name[i].includes(search_term)) {
                search_results.push(recipe_name[i])
                search_results_num.push(recipe_number[i])

                if (recipe_category[i] === "lamb") {
                    search_results_category.push("Lamb")
                } else if (recipe_category[i] === "beef") {
                    search_results_category.push("Beef")
                } else if (recipe_category[i] === "pork") {
                    search_results_category.push("Pork")
                } else if (recipe_category[i] === "poultry") {
                    search_results_category.push("Duck/Poultry")
                } else if (recipe_category[i] === "fish") {
                    search_results_category.push("Fish")
                } else if (recipe_category[i] === "vegetarian") {
                    search_results_category.push("Vegetarian")
                } else if (recipe_category[i] === "vege") {
                    search_results_category.push("Vegetables")
                }
            }
        }
    } else{
        for (let i = 0; i < recipe_name.length ; i++) {
            if (recipe_name[i].includes(search_term) && recipe_category[i] === search_category) {
                search_results.push(recipe_name[i])
                search_results_num.push(recipe_number[i])


                if (recipe_category[i] === "lamb") {
                    search_results_category.push("Lamb")
                } else if (recipe_category[i] === "beef") {
                    search_results_category.push("Beef")
                } else if (recipe_category[i] === "pork") {
                    search_results_category.push("Pork")
                } else if (recipe_category[i] === "poultry") {
                    search_results_category.push("Duck/Poultry")
                } else if (recipe_category[i] === "fish") {
                    search_results_category.push("Fish")
                } else if (recipe_category[i] === "vegetarian") {
                    search_results_category.push("Vegetarian")
                } else if (recipe_category[i] === "vege") {
                    search_results_category.push("Vegetables")
                }

            }
        }
    }

    

    var delete_parent = document.getElementById("results"); //deletes all the rows so the new ones can come in
    while (delete_parent.firstChild) {
        delete_parent.removeChild(delete_parent.lastChild)
    }


    for (let i = 0; i < search_results.length; i += 1){
        const new_row = document.createElement("div");
        new_row.className = "result";
        

        if (starred_recipes.includes(search_results[i])) {
            new_row.id = "starred";
        }



        const arr = search_results[i].split(" ");

        for (var q = 0; q < arr.length; q++){
            arr[q] = arr[q].charAt(0).toUpperCase() + arr[q].slice(1);
        }

        const final_result = arr.join(" ");

        var text = document.createTextNode(final_result)
        const recipe = document.createElement("p");
        recipe.className = "recipe";
        recipe.appendChild(text);
        new_row.appendChild(recipe);

        var category_type = document.createTextNode(search_results_category[i])
        const category = document.createElement("p");
        category.className = "category";
        category.appendChild(category_type);
        new_row.appendChild(category);

        var number = document.createTextNode(search_results_num[i])
        const rec_num = document.createElement("p");
        rec_num.className = "page_no";
        rec_num.appendChild(number);
        new_row.appendChild(rec_num);




        var parent = document.getElementById("results");
        parent.appendChild(new_row)
    }




}
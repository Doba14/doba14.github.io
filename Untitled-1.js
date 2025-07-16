        // Données du jeu
        const gameData = {
            classes: [
                {
                    name: "Première C",
                    description: "Sciences et Mathématiques",
                    subjects: [
                        {
                            name: "Mathématiques",
                            icon: "📐",
                            color: "bg-blue-500",
                            lessons: [
                                {
                                    title: "Équation et inéquation du second degré dans R",
                                    description: "Résolution et applications des équations du second degré",
                                    questions: [
                                        {
                                            question: "Résoudre l'équation x² - 5x + 6 = 0",
                                            answers: ["x = 2 ou x = 3", "x = -2 ou x = -3", "x = 1 ou x = 6"],
                                            correct: "x = 2 ou x = 3",
                                            explanation: "On factorise: x² - 5x + 6 = (x - 2)(x - 3) = 0, donc x = 2 ou x = 3."
                                        },
                                        {
                                            question: "Résoudre l'inéquation x² - 4 ≤ 0",
                                            answers: ["x ∈ [-2, 2]", "x ∈ ]-∞, -2] ∪ [2, +∞[", "x ∈ ]-∞, 2] ∪ [2, +∞["],
                                            correct: "x ∈ [-2, 2]",
                                            explanation: "x² - 4 ≤ 0 ⟺ x² ≤ 4 ⟺ -2 ≤ x ≤ 2, donc x ∈ [-2, 2]."
                                        },
                                        {
                                            question: "Résoudre l'équation x² + 2x + 1 = 0",
                                            answers: ["x = -1 (racine double)", "x = 1 (racine double)", "Pas de solution réelle"],
                                            correct: "x = -1 (racine double)",
                                            explanation: "x² + 2x + 1 = (x + 1)² = 0, donc x = -1 est une racine double."
                                        },
                                        {
                                            question: "Résoudre l'équation 2x² - 3x - 5 = 0",
                                            answers: ["x = -1 ou x = 5/2", "x = 1 ou x = -5/2", "x = 3/4 ou x = -5/3"],
                                            correct: "x = -1 ou x = 5/2",
                                            explanation: "Utilisons la formule du discriminant: Δ = b² - 4ac = (-3)² - 4×2×(-5) = 9 + 40 = 49. Donc x₁ = (-b-√Δ)/2a = (3-7)/4 = -1 et x₂ = (-b+√Δ)/2a = (3+7)/4 = 5/2."
                                        },
                                        {
                                            question: "Résoudre l'équation x² - 6x + 9 = 0",
                                            answers: ["x = 3 (racine double)", "x = -3 (racine double)", "x = 3 ou x = -3"],
                                            correct: "x = 3 (racine double)",
                                            explanation: "x² - 6x + 9 = (x - 3)² = 0, donc x = 3 est une racine double."
                                        },
                                        {
                                            question: "Résoudre l'inéquation x² - x - 6 > 0",
                                            answers: ["x ∈ ]-∞, -2[ ∪ ]3, +∞[", "x ∈ ]-2, 3[", "x ∈ [-2, 3]"],
                                            correct: "x ∈ ]-∞, -2[ ∪ ]3, +∞[",
                                            explanation: "x² - x - 6 = (x - 3)(x + 2). Le produit est positif quand les deux facteurs sont de même signe, donc x < -2 ou x > 3."
                                        },
                                        {
                                            question: "Résoudre l'équation x² + 4 = 0",
                                            answers: ["Pas de solution réelle", "x = 2i ou x = -2i", "x = 2 ou x = -2"],
                                            correct: "Pas de solution réelle",
                                            explanation: "x² + 4 = 0 ⟺ x² = -4. Comme le carré d'un nombre réel est toujours positif ou nul, cette équation n'a pas de solution réelle."
                                        },
                                        {
                                            question: "Résoudre l'équation 3x² - 12 = 0",
                                            answers: ["x = 2 ou x = -2", "x = 4 ou x = -4", "x = 6 ou x = -6"],
                                            correct: "x = 2 ou x = -2",
                                            explanation: "3x² - 12 = 0 ⟺ 3x² = 12 ⟺ x² = 4 ⟺ x = 2 ou x = -2."
                                        },
                                        {
                                            question: "Résoudre l'inéquation (x - 1)(x - 3) ≤ 0",
                                            answers: ["x ∈ [1, 3]", "x ∈ ]-∞, 1] ∪ [3, +∞[", "x ∈ ]-∞, 1[ ∪ ]3, +∞["],
                                            correct: "x ∈ [1, 3]",
                                            explanation: "Le produit (x - 1)(x - 3) est négatif ou nul quand les facteurs sont de signes opposés ou nuls, donc 1 ≤ x ≤ 3."
                                        },
                                        {
                                            question: "Résoudre l'équation x² - 7x + 12 = 0",
                                            answers: ["x = 3 ou x = 4", "x = -3 ou x = -4", "x = 3 ou x = -4"],
                                            correct: "x = 3 ou x = 4",
                                            explanation: "x² - 7x + 12 = (x - 3)(x - 4) = 0, donc x = 3 ou x = 4."
                                        }
                                    ]
                                },
                                {
                                    title: "Barycentre",
                                    description: "Étude du barycentre de points pondérés",
                                    questions: [
                                        {
                                            question: "Soit A(1,2) et B(3,4) deux points pondérés respectivement par a=2 et b=3. Quelles sont les coordonnées du barycentre G?",
                                            answers: ["G(2.2, 3.2)", "G(2, 3)", "G(4, 6)"],
                                            correct: "G(2.2, 3.2)",
                                            explanation: "G = (aA + bB)/(a+b) = (2(1,2) + 3(3,4))/5 = (2+9, 4+12)/5 = (11, 16)/5 = (2.2, 3.2)"
                                        },
                                        {
                                            question: "Trois points A, B et C forment un triangle équilatéral. Où se situe le barycentre de ces trois points affectés du même coefficient?",
                                            answers: ["Au centre de gravité du triangle", "Au milieu d'un des côtés", "Sur la médiane"],
                                            correct: "Au centre de gravité du triangle",
                                            explanation: "Le barycentre de trois points de même coefficient est le centre de gravité du triangle qu'ils forment."
                                        },
                                        {
                                            question: "Soit A(0,0), B(4,0) et C(0,4) trois points du plan. Quelles sont les coordonnées du barycentre G de ces trois points affectés du même coefficient?",
                                            answers: ["G(4/3, 4/3)", "G(2, 2)", "G(1, 1)"],
                                            correct: "G(4/3, 4/3)",
                                            explanation: "G = (A + B + C)/3 = ((0,0) + (4,0) + (0,4))/3 = (4, 4)/3 = (4/3, 4/3)"
                                        },
                                        {
                                            question: "Soit A(1,1), B(3,1) et C(2,3) trois points du plan. Quelles sont les coordonnées du barycentre G de ces trois points affectés respectivement des coefficients 2, 3 et 4?",
                                            answers: ["G(2, 2)", "G(2.11, 1.89)", "G(2.5, 2)"],
                                            correct: "G(2.11, 1.89)",
                                            explanation: "G = (2A + 3B + 4C)/(2+3+4) = (2(1,1) + 3(3,1) + 4(2,3))/9 = ((2+9+8), (2+3+12))/9 = (19, 17)/9 ≈ (2.11, 1.89)"
                                        },
                                        {
                                            question: "Soit A(2,3) et B(6,1) deux points du plan. Quel est le point C tel que le barycentre des points A, B et C affectés du même coefficient soit le point G(3,2)?",
                                            answers: ["C(1,2)", "C(3,3)", "C(1,1)"],
                                            correct: "C(1,2)",
                                            explanation: "Si G est le barycentre de A, B et C avec le même coefficient, alors G = (A + B + C)/3. Donc C = 3G - A - B = 3(3,2) - (2,3) - (6,1) = (9,6) - (2,3) - (6,1) = (1,2)"
                                        },
                                        {
                                            question: "Soit A(1,2), B(3,4) et C(5,0) trois points du plan. Quel est le point D tel que le barycentre des points A, B, C et D affectés du même coefficient soit l'origine O(0,0)?",
                                            answers: ["D(-9,-6)", "D(-3,-2)", "D(-4,-3)"],
                                            correct: "D(-9,-6)",
                                            explanation: "Si O est le barycentre de A, B, C et D avec le même coefficient, alors O = (A + B + C + D)/4. Donc D = 4O - A - B - C = 4(0,0) - (1,2) - (3,4) - (5,0) = (0,0) - (9,6) = (-9,-6)"
                                        },
                                        {
                                            question: "Soit A(2,1), B(4,3) et C(0,5) trois points du plan. Quel est le point G tel que GA + GB + GC = 0?",
                                            answers: ["G(2,3)", "G(3,2)", "G(6,9)"],
                                            correct: "G(2,3)",
                                            explanation: "Si GA + GB + GC = 0, alors G est le barycentre des points A, B et C affectés du même coefficient. Donc G = (A + B + C)/3 = ((2,1) + (4,3) + (0,5))/3 = (6,9)/3 = (2,3)"
                                        },
                                        {
                                            question: "Soit A(1,1), B(5,1) et C(3,5) trois points formant un triangle. Où se situe le centre de gravité de ce triangle?",
                                            answers: ["G(3,7/3)", "G(3,2)", "G(9/4,7/3)"],
                                            correct: "G(3,7/3)",
                                            explanation: "Le centre de gravité d'un triangle est le barycentre des trois sommets affectés du même coefficient. Donc G = (A + B + C)/3 = ((1,1) + (5,1) + (3,5))/3 = (9,7)/3 = (3,7/3)"
                                        },
                                        {
                                            question: "Soit A(0,0), B(6,0) et C(3,3√3) les sommets d'un triangle équilatéral. Quelles sont les coordonnées du centre du cercle circonscrit à ce triangle?",
                                            answers: ["(3,√3)", "(3,3)", "(3,2√3)"],
                                            correct: "(3,√3)",
                                            explanation: "Dans un triangle équilatéral, le centre du cercle circonscrit coïncide avec le centre de gravité. Le centre de gravité est le barycentre des trois sommets affectés du même coefficient. Donc G = (A + B + C)/3 = ((0,0) + (6,0) + (3,3√3))/3 = (9,3√3)/3 = (3,√3)"
                                        },
                                        {
                                            question: "Soit A(1,2), B(3,4) et C(5,0) trois points du plan. Quelles sont les coordonnées du barycentre G de ces trois points affectés respectivement des coefficients 2, 3 et 1?",
                                            answers: ["G(3,2.5)", "G(2.5,3)", "G(3,3)"],
                                            correct: "G(3,2.5)",
                                            explanation: "G = (2A + 3B + C)/(2+3+1) = (2(1,2) + 3(3,4) + 1(5,0))/6 = ((2+9+5), (4+12+0))/6 = (16,16)/6 = (8/3,8/3) ≈ (3,2.5)"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Physique-Chimie",
                            icon: "🧪",
                            color: "bg-green-500",
                            lessons: [
                                {
                                    title: "Travail et puissance d'une force",
                                    description: "Étude du travail et de la puissance en mécanique",
                                    questions: [
                                        {
                                            question: "Quelle est l'unité du travail d'une force dans le Système International?",
                                            answers: ["Le joule (J)", "Le newton (N)", "Le watt (W)"],
                                            correct: "Le joule (J)",
                                            explanation: "Le travail d'une force s'exprime en joules (J) dans le Système International."
                                        },
                                        {
                                            question: "Une force constante F = 10 N déplace un objet de 5 m dans la direction de la force. Quel est le travail effectué?",
                                            answers: ["50 J", "10 J", "5 J"],
                                            correct: "50 J",
                                            explanation: "Le travail d'une force constante est W = F × d = 10 N × 5 m = 50 J."
                                        },
                                        {
                                            question: "Quelle est l'unité de la puissance dans le Système International?",
                                            answers: ["Le watt (W)", "Le joule (J)", "Le newton (N)"],
                                            correct: "Le watt (W)",
                                            explanation: "La puissance s'exprime en watts (W) dans le Système International."
                                        },
                                        {
                                            question: "Un moteur fournit un travail de 1000 J en 5 secondes. Quelle est sa puissance?",
                                            answers: ["200 W", "500 W", "5000 W"],
                                            correct: "200 W",
                                            explanation: "La puissance est le rapport du travail sur le temps: P = W/t = 1000 J / 5 s = 200 W."
                                        },
                                        {
                                            question: "Le travail d'une force est nul quand:",
                                            answers: ["La force est perpendiculaire au déplacement", "La force est nulle", "La force est dans le sens opposé au déplacement"],
                                            correct: "La force est perpendiculaire au déplacement",
                                            explanation: "Le travail d'une force est W = F × d × cos(θ), où θ est l'angle entre la force et le déplacement. Si θ = 90°, alors cos(90°) = 0, donc W = 0."
                                        },
                                        {
                                            question: "Une force de 20 N fait un angle de 60° avec le déplacement de 3 m. Quel est le travail effectué?",
                                            answers: ["30 J", "60 J", "10 J"],
                                            correct: "30 J",
                                            explanation: "W = F × d × cos(θ) = 20 N × 3 m × cos(60°) = 20 N × 3 m × 0.5 = 30 J."
                                        },
                                        {
                                            question: "Quelle est la relation entre la puissance, la force et la vitesse?",
                                            answers: ["P = F × v", "P = F / v", "P = F × v²"],
                                            correct: "P = F × v",
                                            explanation: "La puissance est le produit de la force par la vitesse: P = F × v."
                                        },
                                        {
                                            question: "Un objet de masse 2 kg est soulevé verticalement à une hauteur de 5 m. Quel est le travail effectué contre la gravité? (g = 9.8 m/s²)",
                                            answers: ["98 J", "10 J", "49 J"],
                                            correct: "98 J",
                                            explanation: "Le travail contre la gravité est W = m × g × h = 2 kg × 9.8 m/s² × 5 m = 98 J."
                                        },
                                        {
                                            question: "Une voiture de 1000 kg roule à 20 m/s. Quelle est son énergie cinétique?",
                                            answers: ["200 000 J", "20 000 J", "400 000 J"],
                                            correct: "200 000 J",
                                            explanation: "L'énergie cinétique est Ec = (1/2) × m × v² = 0.5 × 1000 kg × (20 m/s)² = 0.5 × 1000 kg × 400 m²/s² = 200 000 J."
                                        },
                                        {
                                            question: "Le travail d'une force conservative sur un trajet fermé est:",
                                            answers: ["Nul", "Positif", "Négatif"],
                                            correct: "Nul",
                                            explanation: "Le travail d'une force conservative sur un trajet fermé est toujours nul."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Première D",
                    description: "Sciences de la Vie",
                    subjects: [
                        {
                            name: "SVT",
                            icon: "🌱",
                            color: "bg-green-500",
                            lessons: [
                                {
                                    title: "Structure interne du globe terrestre",
                                    description: "Étude des couches internes de la Terre",
                                    questions: [
                                        {
                                            question: "Quelles sont les trois principales couches de la structure interne de la Terre?",
                                            answers: ["Croûte, manteau et noyau", "Lithosphère, asthénosphère et mésosphère", "Hydrosphère, atmosphère et biosphère"],
                                            correct: "Croûte, manteau et noyau",
                                            explanation: "La Terre est composée de trois couches principales: la croûte (externe), le manteau (intermédiaire) et le noyau (interne)."
                                        },
                                        {
                                            question: "Quelle est la couche la plus externe de la Terre?",
                                            answers: ["La croûte", "Le manteau", "La lithosphère"],
                                            correct: "La croûte",
                                            explanation: "La croûte est la couche la plus externe de la Terre, avec une épaisseur variant de 5 à 70 km."
                                        },
                                        {
                                            question: "Quelle est la couche la plus volumineuse de la Terre?",
                                            answers: ["Le manteau", "Le noyau", "La croûte"],
                                            correct: "Le manteau",
                                            explanation: "Le manteau est la couche la plus volumineuse, représentant environ 84% du volume total de la Terre."
                                        },
                                        {
                                            question: "De quoi est principalement composé le noyau externe de la Terre?",
                                            answers: ["De fer et de nickel à l'état liquide", "De silicates", "De roches granitiques"],
                                            correct: "De fer et de nickel à l'état liquide",
                                            explanation: "Le noyau externe est principalement composé de fer et de nickel à l'état liquide, ce qui permet la génération du champ magnétique terrestre."
                                        },
                                        {
                                            question: "Quelle est la température estimée au centre de la Terre?",
                                            answers: ["Environ 5000°C", "Environ 100°C", "Environ 1000°C"],
                                            correct: "Environ 5000°C",
                                            explanation: "La température au centre de la Terre est estimée à environ 5000°C, comparable à la surface du Soleil."
                                        },
                                        {
                                            question: "Quelle est la différence entre la croûte océanique et la croûte continentale?",
                                            answers: ["La croûte océanique est plus dense et plus mince", "La croûte océanique est moins dense et plus épaisse", "Elles ont la même composition et la même épaisseur"],
                                            correct: "La croûte océanique est plus dense et plus mince",
                                            explanation: "La croûte océanique est plus dense (environ 3 g/cm³) et plus mince (5-10 km) que la croûte continentale (densité d'environ 2,7 g/cm³ et épaisseur de 30-70 km)."
                                        },
                                        {
                                            question: "Qu'est-ce que la discontinuité de Mohorovičić (Moho)?",
                                            answers: ["La limite entre la croûte et le manteau", "La limite entre le manteau et le noyau", "La limite entre le noyau externe et le noyau interne"],
                                            correct: "La limite entre la croûte et le manteau",
                                            explanation: "La discontinuité de Mohorovičić, ou Moho, est la limite entre la croûte et le manteau, située à une profondeur moyenne de 35 km sous les continents et 7 km sous les océans."
                                        },
                                        {
                                            question: "Qu'est-ce que l'asthénosphère?",
                                            answers: ["Une partie du manteau supérieur partiellement fondue", "Une partie de la croûte terrestre", "Une partie du noyau externe"],
                                            correct: "Une partie du manteau supérieur partiellement fondue",
                                            explanation: "L'asthénosphère est une zone du manteau supérieur partiellement fondue, plastique et visqueuse, sur laquelle se déplacent les plaques lithosphériques."
                                        },
                                        {
                                            question: "Quelle est la principale source de chaleur interne de la Terre?",
                                            answers: ["La désintégration d'éléments radioactifs", "L'énergie solaire", "La friction des plaques tectoniques"],
                                            correct: "La désintégration d'éléments radioactifs",
                                            explanation: "La principale source de chaleur interne de la Terre est la désintégration d'éléments radioactifs comme l'uranium, le thorium et le potassium."
                                        },
                                        {
                                            question: "Qu'est-ce que la lithosphère?",
                                            answers: ["L'ensemble de la croûte et de la partie supérieure du manteau", "Uniquement la croûte terrestre", "L'ensemble du manteau terrestre"],
                                            correct: "L'ensemble de la croûte et de la partie supérieure du manteau",
                                            explanation: "La lithosphère comprend la croûte terrestre et la partie supérieure du manteau, formant des plaques rigides qui se déplacent sur l'asthénosphère."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {            
                    name: "Première A",
                    description: "Littérature et Sciences Humaines",
                    subjects: [
                                                    {
                                    name: "Philosophie",
                                    icon: "🧠",
                                    color: "bg-purple-500",
                                    lessons: [
                                        {
                                            title: "Les grandes questions philosophiques",
                                            description: "Introduction aux problématiques fondamentales de la philosophie",
                                            questions: [
                                                {
                                                    question: "Quelle est la signification étymologique du mot 'philosophie'?",
                                                    answers: ["Amour de la sagesse", "Recherche de la vérité", "Étude de l'être"],
                                                    correct: "Amour de la sagesse",
                                                    explanation: "Le mot 'philosophie' vient du grec 'philosophia', composé de 'philos' (ami, amour) et 'sophia' (sagesse), signifiant littéralement 'amour de la sagesse'."
                                                },
                                                {
                                                    question: "Qui est considéré comme le père de la philosophie occidentale?",
                                                    answers: ["Socrate", "Platon", "Aristote"],
                                                    correct: "Socrate",
                                                    explanation: "Socrate (470-399 av. J.-C.) est généralement considéré comme le père de la philosophie occidentale, bien qu'il n'ait laissé aucun écrit. Sa méthode de questionnement, la maïeutique, a posé les bases de la réflexion philosophique."
                                                },
                                                {
                                                    question: "Quelle célèbre phrase est attribuée à Descartes?",
                                                    answers: ["Je pense, donc je suis", "Connais-toi toi-même", "L'homme est un animal politique"],
                                                    correct: "Je pense, donc je suis",
                                                    explanation: "La phrase 'Je pense, donc je suis' (Cogito, ergo sum) est attribuée à René Descartes dans son 'Discours de la méthode' (1637). Elle exprime le fondement de sa philosophie: la certitude de l'existence du sujet pensant."
                                                },
                                                {
                                                    question: "Qu'est-ce que l'impératif catégorique selon Kant?",
                                                    answers: ["Un principe moral universel indépendant des conséquences", "Une règle de conduite basée sur l'utilité", "Un commandement divin"],
                                                    correct: "Un principe moral universel indépendant des conséquences",
                                                    explanation: "L'impératif catégorique de Kant est un principe moral universel qui commande inconditionnellement, indépendamment des conséquences. Sa formulation principale est: 'Agis uniquement d'après la maxime qui fait que tu peux vouloir en même temps qu'elle devienne une loi universelle'."
                                                },
                                                {
                                                    question: "Quelle est la principale préoccupation de l'existentialisme?",
                                                    answers: ["La liberté et la responsabilité individuelles", "La nature de la connaissance", "L'existence de Dieu"],
                                                    correct: "La liberté et la responsabilité individuelles",
                                                    explanation: "L'existentialisme, courant philosophique représenté notamment par Sartre et Camus, se préoccupe principalement de la liberté et de la responsabilité individuelles, affirmant que l'existence précède l'essence et que l'homme est condamné à être libre."
                                                },
                                                {
                                                    question: "Quelle est la différence entre la morale et l'éthique?",
                                                    answers: ["La morale concerne les règles de conduite, l'éthique leur réflexion critique", "L'éthique est religieuse, la morale est laïque", "La morale est universelle, l'éthique est relative"],
                                                    correct: "La morale concerne les règles de conduite, l'éthique leur réflexion critique",
                                                    explanation: "Bien que souvent utilisés comme synonymes, ces termes peuvent être distingués: la morale désigne généralement l'ensemble des règles de conduite considérées comme bonnes, tandis que l'éthique est la réflexion critique sur ces règles et leurs fondements."
                                                },
                                                {
                                                    question: "Qu'est-ce que le 'mythe de la caverne' de Platon?",
                                                    answers: ["Une allégorie sur l'accès à la connaissance et la libération de l'ignorance", "Un récit sur l'origine de l'humanité", "Une explication de la formation de l'univers"],
                                                    correct: "Une allégorie sur l'accès à la connaissance et la libération de l'ignorance",
                                                    explanation: "Le 'mythe de la caverne', présenté dans 'La République' de Platon, est une allégorie illustrant le passage de l'ignorance (les prisonniers enchaînés ne voyant que des ombres) à la connaissance (la sortie vers la lumière), symbolisant l'accès à la vérité philosophique et la libération de l'ignorance."
                                                },
                                                {
                                                    question: "Quelle est la conception de la liberté selon Spinoza?",
                                                    answers: ["La liberté est la compréhension de la nécessité", "La liberté est l'absence de contrainte", "La liberté est le libre arbitre absolu"],
                                                    correct: "La liberté est la compréhension de la nécessité",
                                                    explanation: "Pour Spinoza, la liberté n'est pas l'absence de détermination, mais la compréhension des causes qui nous déterminent. L'homme libre est celui qui comprend la nécessité qui régit toute chose et agit selon sa nature propre."
                                                },
                                                {
                                                    question: "Qu'est-ce que le nihilisme selon Nietzsche?",
                                                    answers: ["La dévaluation de toutes les valeurs supérieures", "L'affirmation de l'absurdité de l'existence", "La négation de la réalité matérielle"],
                                                    correct: "La dévaluation de toutes les valeurs supérieures",
                                                    explanation: "Le nihilisme, selon Nietzsche, est la dévaluation de toutes les valeurs supérieures (Dieu, vérité, bien) qui donnaient auparavant un sens à l'existence. Il résume ce phénomène par la formule 'Dieu est mort'."
                                                },
                                                {
                                                    question: "Quelle est la thèse principale du 'Discours sur l'origine et les fondements de l'inégalité parmi les hommes' de Rousseau?",
                                                    answers: ["L'inégalité sociale est artificielle et non naturelle", "L'inégalité est nécessaire au progrès", "L'inégalité est d'origine divine"],
                                                    correct: "L'inégalité sociale est artificielle et non naturelle",
                                                    explanation: "Dans ce discours, Rousseau soutient que l'inégalité sociale et politique n'est pas naturelle mais résulte des conventions humaines et du développement de la propriété privée, contrairement à l'état de nature où les hommes étaient plus égaux."
                                                }
                                            ]
                                        },
                                        {
                                            title: "La conscience et l'inconscient",
                                            description: "Exploration des différentes dimensions de l'esprit humain",
                                            questions: [
                                                {
                                                    question: "Selon Freud, quelles sont les trois instances de l'appareil psychique?",
                                                    answers: ["Le ça, le moi et le surmoi", "Le conscient, le préconscient et l'inconscient", "L'id, l'ego et l'alter-ego"],
                                                    correct: "Le ça, le moi et le surmoi",
                                                    explanation: "Freud divise l'appareil psychique en trois instances: le ça (siège des pulsions), le moi (principe de réalité) et le surmoi (intériorisation des interdits et des exigences morales)."
                                                },
                                                {
                                                    question: "Qu'est-ce que le cogito cartésien?",
                                                    answers: ["La certitude immédiate de l'existence du sujet pensant", "La méthode du doute systématique", "La preuve de l'existence de Dieu"],
                                                    correct: "La certitude immédiate de l'existence du sujet pensant",
                                                    explanation: "Le cogito cartésien ('Je pense, donc je suis') exprime la certitude immédiate que le sujet a de sa propre existence en tant qu'être pensant, certitude qui résiste même au doute le plus radical."
                                                },
                                                {
                                                    question: "Quelle est la conception bergsonienne de la conscience?",
                                                    answers: ["Un flux continu de durée intérieure", "Un ensemble d'états mentaux distincts", "Une faculté purement rationnelle"],
                                                    correct: "Un flux continu de durée intérieure",
                                                    explanation: "Pour Henri Bergson, la conscience est un flux continu, une 'durée' intérieure qui ne peut être divisée en instants distincts sans en dénaturer l'essence, contrairement au temps spatialisé de la science."
                                                },
                                                {
                                                    question: "Qu'est-ce que l'inconscient collectif selon Jung?",
                                                    answers: ["Une structure psychique universelle contenant des archétypes communs à toute l'humanité", "L'ensemble des refoulements d'une société", "La mémoire collective d'un groupe social"],
                                                    correct: "Une structure psychique universelle contenant des archétypes communs à toute l'humanité",
                                                    explanation: "Carl Jung a développé le concept d'inconscient collectif, une structure psychique universelle contenant des archétypes (images primordiales) communs à tous les êtres humains, indépendamment de leur culture ou époque."
                                                },
                                                {
                                                    question: "Selon Sartre, quelle est la caractéristique fondamentale de la conscience?",
                                                    answers: ["L'intentionnalité (être conscience de quelque chose)", "La réflexivité (se connaître soi-même)", "La permanence (rester identique à soi)"],
                                                    correct: "L'intentionnalité (être conscience de quelque chose)",
                                                    explanation: "Pour Sartre, la conscience est fondamentalement intentionnelle: elle est toujours conscience de quelque chose, elle se transcende vers le monde, elle est un 'être-pour-soi' opposé à l'en-soi des choses."
                                                },
                                                {
                                                    question: "Qu'est-ce que le refoulement selon la psychanalyse?",
                                                    answers: ["Un mécanisme de défense qui rejette dans l'inconscient des représentations inacceptables", "L'expression directe des pulsions", "La sublimation des désirs"],
                                                    correct: "Un mécanisme de défense qui rejette dans l'inconscient des représentations inacceptables",
                                                    explanation: "Le refoulement est un mécanisme de défense psychique qui consiste à rejeter dans l'inconscient des représentations (pensées, images, souvenirs) liées à une pulsion et jugées inacceptables par le moi."
                                                },
                                                {
                                                    question: "Quelle est la différence entre conscience psychologique et conscience morale?",
                                                    answers: ["La première est la connaissance de soi, la seconde le jugement sur le bien et le mal", "La première est innée, la seconde acquise", "La première est individuelle, la seconde collective"],
                                                    correct: "La première est la connaissance de soi, la seconde le jugement sur le bien et le mal",
                                                    explanation: "La conscience psychologique désigne la connaissance que le sujet a de ses états mentaux, tandis que la conscience morale est la faculté de juger ses propres actions selon des critères de bien et de mal."
                                                },
                                                {
                                                    question: "Selon Nietzsche, qu'est-ce que la 'mauvaise conscience'?",
                                                    answers: ["L'intériorisation de la cruauté et le retournement des instincts contre soi", "Le sentiment de culpabilité religieuse", "La conscience malheureuse hégélienne"],
                                                    correct: "L'intériorisation de la cruauté et le retournement des instincts contre soi",
                                                    explanation: "Pour Nietzsche, la 'mauvaise conscience' naît lorsque l'homme, contraint de vivre en société, ne peut plus extérioriser ses instincts agressifs et les retourne contre lui-même, intériorisant ainsi la cruauté."
                                                },
                                                {
                                                    question: "Qu'est-ce que l'inconscient selon Freud?",
                                                    answers: ["Un système psychique contenant des représentations refoulées", "Une simple absence de conscience", "Une forme de conscience diminuée"],
                                                    correct: "Un système psychique contenant des représentations refoulées",
                                                    explanation: "Pour Freud, l'inconscient est un système psychique à part entière, régi par des lois propres (processus primaires), contenant des représentations refoulées qui continuent d'agir sur le psychisme et le comportement."
                                                },
                                                {
                                                    question: "Quelle est la conception phénoménologique de la conscience?",
                                                    answers: ["La conscience comme ouverture intentionnelle au monde", "La conscience comme substance pensante", "La conscience comme épiphénomène du cerveau"],
                                                    correct: "La conscience comme ouverture intentionnelle au monde",
                                                    explanation: "La phénoménologie (Husserl, Merleau-Ponty) conçoit la conscience non comme une chose ou une substance, mais comme une ouverture intentionnelle au monde, un 'être-au-monde' qui donne sens aux phénomènes."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Histoire",
                                    icon: "📜",
                                    color: "bg-amber-500",
                                    lessons: [
                                        {
                                            title: "La Première Guerre mondiale",
                                            description: "Causes, déroulement et conséquences du premier conflit mondial",
                                            questions: [
                                                {
                                                    question: "Quel événement a déclenché la Première Guerre mondiale?",
                                                    answers: ["L'assassinat de l'archiduc François-Ferdinand à Sarajevo", "L'invasion de la Belgique par l'Allemagne", "La mobilisation russe"],
                                                    correct: "L'assassinat de l'archiduc François-Ferdinand à Sarajevo",
                                                    explanation: "L'assassinat de l'archiduc François-Ferdinand, héritier du trône austro-hongrois, par un nationaliste serbe à Sarajevo le 28 juin 1914, a déclenché une série d'événements menant à la guerre."
                                                },
                                                {
                                                    question: "Quelles étaient les deux principales alliances au début de la Première Guerre mondiale?",
                                                    answers: ["La Triple-Entente et la Triple-Alliance", "L'Axe et les Alliés", "Le Pacte de Varsovie et l'OTAN"],
                                                    correct: "La Triple-Entente et la Triple-Alliance",
                                                    explanation: "Au début de la guerre, les deux principales alliances étaient la Triple-Entente (France, Royaume-Uni, Russie) et la Triple-Alliance (Allemagne, Autriche-Hongrie, Italie, bien que cette dernière rejoignit finalement l'Entente)."
                                                },
                                                {
                                                    question: "Qu'est-ce que la 'Der des Ders'?",
                                                    answers: ["L'expression désignant la Première Guerre mondiale comme 'la dernière des dernières'", "Le nom d'une bataille décisive", "Le surnom donné au traité de Versailles"],
                                                    correct: "L'expression désignant la Première Guerre mondiale comme 'la dernière des dernières'",
                                                    explanation: "L'expression 'Der des Ders' (la dernière des dernières) était utilisée pour désigner la Première Guerre mondiale, dans l'espoir qu'elle serait la dernière guerre de l'histoire, ce qui s'avéra malheureusement faux."
                                                },
                                                {
                                                    question: "Qu'est-ce que la bataille de Verdun?",
                                                    answers: ["Une longue bataille d'usure entre Français et Allemands en 1916", "La dernière offensive allemande en 1918", "La bataille navale décisive de la guerre"],
                                                    correct: "Une longue bataille d'usure entre Français et Allemands en 1916",
                                                    explanation: "La bataille de Verdun (février-décembre 1916) fut une terrible bataille d'usure entre les armées française et allemande, symbolisant l'horreur des combats de la Première Guerre mondiale, avec plus de 700 000 victimes."
                                                },
                                                {
                                                    question: "Quel pays est entré en guerre aux côtés de l'Entente en 1917, contribuant à changer l'équilibre des forces?",
                                                    answers: ["Les États-Unis", "Le Japon", "L'Italie"],
                                                    correct: "Les États-Unis",
                                                    explanation: "Les États-Unis sont entrés en guerre en avril 1917 aux côtés de l'Entente, après la reprise de la guerre sous-marine à outrance par l'Allemagne, apportant un soutien décisif matériel et humain."
                                                },
                                                {
                                                    question: "Qu'est-ce que le traité de Versailles?",
                                                    answers: ["Le traité de paix signé entre les Alliés et l'Allemagne en 1919", "L'armistice mettant fin aux combats en 1918", "L'alliance militaire formée après la guerre"],
                                                    correct: "Le traité de paix signé entre les Alliés et l'Allemagne en 1919",
                                                    explanation: "Le traité de Versailles, signé le 28 juin 1919, est le principal traité de paix conclu entre les Alliés et l'Allemagne. Il imposait à cette dernière de lourdes réparations et restrictions, créant un ressentiment qui contribua à la montée du nazisme."
                                                },
                                                {
                                                    question: "Qu'est-ce que la 'guerre de tranchées'?",
                                                    answers: ["Un type de guerre statique où les soldats combattent depuis des tranchées", "Une tactique d'encerclement", "Une guerre éclair basée sur la mobilité"],
                                                    correct: "Un type de guerre statique où les soldats combattent depuis des tranchées",
                                                    explanation: "La guerre de tranchées est un type de guerre statique caractéristique du front occidental de 1914 à 1918, où les armées s'enterraient dans des réseaux de tranchées, séparées par un 'no man's land', menant à une guerre d'usure meurtrière."
                                                },
                                                {
                                                    question: "Quel empire s'est effondré à la suite de la Première Guerre mondiale?",
                                                    answers: ["L'Empire ottoman, l'Empire austro-hongrois, l'Empire russe et l'Empire allemand", "L'Empire britannique", "L'Empire colonial français"],
                                                    correct: "L'Empire ottoman, l'Empire austro-hongrois, l'Empire russe et l'Empire allemand",
                                                    explanation: "La Première Guerre mondiale a entraîné l'effondrement de quatre empires: l'Empire ottoman, l'Empire austro-hongrois, l'Empire russe (suite à la révolution de 1917) et l'Empire allemand, redesssinant profondément la carte de l'Europe et du Moyen-Orient."
                                                },
                                                {
                                                    question: "Qu'est-ce que la Société des Nations?",
                                                    answers: ["Une organisation internationale créée après la guerre pour maintenir la paix", "Une alliance militaire entre vainqueurs", "Un tribunal international jugeant les crimes de guerre"],
                                                    correct: "Une organisation internationale créée après la guerre pour maintenir la paix",
                                                    explanation: "La Société des Nations (SDN) est une organisation internationale créée en 1919 par le traité de Versailles, ancêtre de l'ONU, dont le but était de préserver la paix par la coopération internationale et la sécurité collective."
                                                },
                                                {
                                                    question: "Quel était le bilan humain approximatif de la Première Guerre mondiale?",
                                                    answers: ["Environ 18-20 millions de morts", "Environ 5 millions de morts", "Environ 50 millions de morts"],
                                                    correct: "Environ 18-20 millions de morts",
                                                    explanation: "Le bilan humain de la Première Guerre mondiale est estimé à environ 18-20 millions de morts (militaires et civils) et plus de 20 millions de blessés, ce qui en fait l'un des conflits les plus meurtriers de l'histoire jusqu'alors."
                                                }
                                            ]
                                        },
                                        {
                                            title: "La décolonisation en Afrique",
                                            description: "Processus et enjeux de l'indépendance des pays africains",
                                            questions: [
                                                {
                                                    question: "Quelle période correspond principalement au mouvement de décolonisation en Afrique?",
                                                    answers: ["Les années 1950-1960", "L'entre-deux-guerres (1918-1939)", "La fin du XIXe siècle"],
                                                    correct: "Les années 1950-1960",
                                                    explanation: "La décolonisation en Afrique s'est principalement déroulée dans les années 1950-1960, avec une vague d'indépendances particulièrement importante en 1960, parfois appelée 'l'année de l'Afrique'."
                                                },
                                                {
                                                    question: "Quel pays africain a été le premier à obtenir son indépendance d'une puissance coloniale européenne au XXe siècle?",
                                                    answers: ["L'Égypte (1922)", "Le Ghana (1957)", "L'Algérie (1962)"],
                                                    correct: "L'Égypte (1922)",
                                                    explanation: "L'Égypte a été le premier pays africain à obtenir son indépendance au XXe siècle, devenant formellement indépendante du Royaume-Uni en 1922, bien que les Britanniques aient conservé une influence importante jusqu'en 1952."
                                                },
                                                {
                                                    question: "Qui était Kwame Nkrumah?",
                                                    answers: ["Le premier président du Ghana et un leader panafricaniste", "Un leader de la lutte pour l'indépendance du Kenya", "Un écrivain anticolonialiste martiniquais"],
                                                    correct: "Le premier président du Ghana et un leader panafricaniste",
                                                    explanation: "Kwame Nkrumah (1909-1972) était un homme politique ghanéen, premier président du Ghana indépendant (1957) et figure majeure du panafricanisme, prônant l'unité africaine face à l'impérialisme occidental."
                                                },
                                                {
                                                    question: "Quelle conférence internationale a réuni en 1955 des pays d'Asie et d'Afrique nouvellement indépendants?",
                                                    answers: ["La conférence de Bandung", "La conférence de Yalta", "La conférence de Berlin"],
                                                    correct: "La conférence de Bandung",
                                                    explanation: "La conférence de Bandung (Indonésie) en avril 1955 a réuni 29 pays d'Asie et d'Afrique, posant les bases du mouvement des non-alignés et affirmant la solidarité du 'tiers-monde' face aux blocs de la guerre froide."
                                                },
                                                {
                                                    question: "Quel type de décolonisation a connu l'Algérie?",
                                                    answers: ["Une décolonisation violente après une guerre de libération", "Une indépendance négociée pacifiquement", "Un processus progressif d'autonomie"],
                                                    correct: "Une décolonisation violente après une guerre de libération",
                                                    explanation: "L'Algérie a connu une décolonisation particulièrement violente, avec une guerre de libération (1954-1962) opposant le Front de Libération Nationale (FLN) à la France, faisant plusieurs centaines de milliers de victimes."
                                                },
                                                {
                                                    question: "Qu'est-ce que la 'négritude'?",
                                                    answers: ["Un mouvement littéraire et politique valorisant l'identité et la culture noires", "Une politique de ségrégation raciale", "Un système économique post-colonial"],
                                                    correct: "Un mouvement littéraire et politique valorisant l'identité et la culture noires",
                                                    explanation: "La négritude est un mouvement littéraire et politique né dans les années 1930, porté notamment par Aimé Césaire, Léopold Sédar Senghor et Léon Damas, visant à valoriser l'identité et la culture noires face au colonialisme."
                                                },
                                                {
                                                    question: "Quel pays africain a connu une décolonisation particulièrement tardive?",
                                                    answers: ["La Namibie (1990)", "Le Sénégal (1960)", "Le Maroc (1956)"],
                                                    correct: "La Namibie (1990)",
                                                    explanation: "La Namibie a connu une décolonisation particulièrement tardive, n'obtenant son indépendance de l'Afrique du Sud qu'en 1990, après une longue lutte menée par la SWAPO et des pressions internationales."
                                                },
                                                {
                                                    question: "Quel concept désigne le maintien d'une influence économique, politique et culturelle des anciennes puissances coloniales après l'indépendance formelle?",
                                                    answers: ["Le néocolonialisme", "Le panafricanisme", "Le tiers-mondisme"],
                                                    correct: "Le néocolonialisme",
                                                    explanation: "Le néocolonialisme désigne le maintien d'une domination économique, politique et culturelle des anciennes puissances coloniales sur leurs anciennes colonies, malgré l'indépendance formelle de ces dernières."
                                                },
                                                {
                                                    question: "Quel leader a dirigé la lutte pour l'indépendance du Congo belge (actuelle RDC) avant d'être assassiné en 1961?",
                                                    answers: ["Patrice Lumumba", "Jomo Kenyatta", "Nelson Mandela"],
                                                    correct: "Patrice Lumumba",
                                                    explanation: "Patrice Lumumba (1925-1961) a dirigé la lutte pour l'indépendance du Congo belge et est devenu le premier Premier ministre du Congo indépendant en 1960, avant d'être renversé puis assassiné en janvier 1961 avec la complicité des services secrets belges et américains."
                                                },
                                                {
                                                    question: "Quelles ont été les principales conséquences politiques de la décolonisation en Afrique?",
                                                    answers: ["L'émergence de nouveaux États-nations aux frontières souvent artificielles", "L'unification immédiate du continent", "Le retour aux structures politiques précoloniales"],
                                                    correct: "L'émergence de nouveaux États-nations aux frontières souvent artificielles",
                                                    explanation: "La décolonisation a entraîné l'émergence de nouveaux États-nations africains, souvent aux frontières artificielles héritées de la colonisation, ce qui a parfois généré des tensions ethniques et des conflits territoriaux."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Français",
                                    icon: "📚",
                                    color: "bg-red-500",
                                    lessons: [
                                        {
                                            title: "Les figures de style",
                                            description: "Étude des principaux procédés stylistiques en littérature",
                                            questions: [
                                                {
                                                    question: "Quelle figure de style consiste à attribuer des caractéristiques humaines à un objet, un animal ou une idée abstraite?",
                                                    answers: ["La personnification", "La comparaison", "La métaphore"],
                                                    correct: "La personnification",
                                                    explanation: "La personnification est une figure de style qui consiste à attribuer des caractéristiques, des sentiments ou des actions humaines à un objet inanimé, un animal ou une idée abstraite. Ex: 'La nature sourit au printemps'."
                                                },
                                                {
                                                    question: "Quelle est la différence entre une comparaison et une métaphore?",
                                                    answers: ["La comparaison utilise un outil de comparaison (comme, tel que), pas la métaphore", "La métaphore est toujours plus longue que la comparaison", "La comparaison ne peut s'appliquer qu'aux objets concrets"],
                                                    correct: "La comparaison utilise un outil de comparaison (comme, tel que), pas la métaphore",
                                                    explanation: "La comparaison établit un rapport de ressemblance entre deux éléments à l'aide d'un outil comparatif (comme, tel que, semblable à...). Ex: 'Ses yeux brillent comme des étoiles'. La métaphore établit ce rapport sans outil comparatif. Ex: 'Ses yeux sont des étoiles'."
                                                },
                                                {
                                                    question: "Dans la phrase 'Cette affaire est un véritable casse-tête', quelle figure de style est employée?",
                                                    answers: ["Une métaphore", "Une hyperbole", "Une litote"],
                                                    correct: "Une métaphore",
                                                    explanation: "Il s'agit d'une métaphore car on établit une identification implicite entre 'cette affaire' et 'un casse-tête', sans utiliser d'outil de comparaison, pour exprimer la difficulté de l'affaire."
                                                },
                                                {
                                                    question: "Qu'est-ce qu'une hyperbole?",
                                                    answers: ["Une exagération pour mettre en relief une idée", "Une atténuation de l'expression", "Une opposition de termes contradictoires"],
                                                    correct: "Une exagération pour mettre en relief une idée",
                                                    explanation: "L'hyperbole est une figure de style qui consiste à exagérer l'expression pour mettre en relief une idée. Ex: 'Je meurs de soif' ou 'Je t'ai attendu une éternité'."
                                                },
                                                {
                                                    question: "Dans la phrase 'Ce n'est pas mauvais' pour dire que c'est bon, quelle figure de style est utilisée?",
                                                    answers: ["Une litote", "Un euphémisme", "Une antiphrase"],
                                                    correct: "Une litote",
                                                    explanation: "La litote consiste à dire moins pour suggérer plus, souvent par la négation du contraire. Ici, 'pas mauvais' est utilisé pour suggérer que c'est bon, mais de façon atténuée."
                                                },
                                                {
                                                    question: "Qu'est-ce qu'une allégorie?",
                                                    answers: ["Une représentation concrète d'une idée abstraite", "Une répétition de sons identiques", "Une description détaillée d'un lieu"],
                                                    correct: "Une représentation concrète d'une idée abstraite",
                                                    explanation: "L'allégorie est une figure de style qui consiste à représenter une idée abstraite par une image concrète, souvent personnifiée. Ex: la Justice représentée par une femme aux yeux bandés tenant une balance."
                                                },
                                                {
                                                    question: "Dans le vers de Victor Hugo 'Waterloo ! Waterloo ! Waterloo ! morne plaine !', quelle figure de style est utilisée au début?",
                                                    answers: ["Une anaphore", "Une gradation", "Une énumération"],
                                                    correct: "Une anaphore",
                                                    explanation: "L'anaphore est la répétition d'un même mot ou groupe de mots au début de phrases ou de vers successifs. Ici, Hugo répète trois fois 'Waterloo' au début du vers pour insister sur le caractère tragique de cette bataille."
                                                },
                                                {
                                                    question: "Qu'est-ce qu'un oxymore?",
                                                    answers: ["L'association de termes contradictoires", "La répétition d'une même idée avec des mots différents", "L'inversion de l'ordre habituel des mots"],
                                                    correct: "L'association de termes contradictoires",
                                                    explanation: "L'oxymore est une figure de style qui consiste à associer deux termes de sens contradictoires. Ex: 'une obscure clarté', 'un silence éloquent', 'cette horreur délicieuse'."
                                                },
                                                {
                                                    question: "Dans la phrase 'La capitale française' pour désigner Paris, quelle figure de style est utilisée?",
                                                    answers: ["Une périphrase", "Une métonymie", "Une synecdoque"],
                                                    correct: "Une périphrase",
                                                    explanation: "La périphrase consiste à remplacer un mot par une expression qui le définit ou le caractérise. Ici, 'la capitale française' est une périphrase désignant Paris."
                                                },
                                                {
                                                    question: "Qu'est-ce qu'une antithèse?",
                                                    answers: ["Le rapprochement de deux idées, mots ou expressions opposés", "L'attribution d'un sens figuré à un mot", "La substitution d'un terme par un autre"],
                                                    correct: "Le rapprochement de deux idées, mots ou expressions opposés",
                                                    explanation: "L'antithèse est une figure de style qui consiste à rapprocher deux idées, mots ou expressions de sens opposés. Ex: 'Je vis, je meurs ; je me brûle et me noie' (Louise Labé) ou 'Cette obscure clarté qui tombe des étoiles' (Corneille)."
                                                }
                                            ]
                                        },
                                        {
                                            title: "Les mouvements littéraires",
                                            description: "Panorama des principaux courants de la littérature française",
                                            questions: [
                                                {
                                                    question: "Quel mouvement littéraire du XIXe siècle se caractérise par l'expression du moi, des sentiments et de la nature?",
                                                    answers: ["Le romantisme", "Le réalisme", "Le symbolisme"],
                                                    correct: "Le romantisme",
                                                    explanation: "Le romantisme, qui s'épanouit en France dans la première moitié du XIXe siècle, se caractérise par l'expression du moi, l'exaltation des sentiments, le goût pour la nature et la mélancolie. Victor Hugo, Lamartine et Musset en sont des représentants majeurs."
                                                },
                                                {
                                                    question: "Qui a écrit le manifeste du surréalisme en 1924?",
                                                    answers: ["André Breton", "Louis Aragon", "Paul Éluard"],
                                                    correct: "André Breton",
                                                    explanation: "André Breton a écrit le 'Manifeste du surréalisme' en 1924, définissant ce mouvement comme un 'automatisme psychique pur' visant à exprimer le fonctionnement réel de la pensée, en dehors de tout contrôle de la raison."
                                                },
                                                {
                                                    question: "Quel mouvement littéraire de la fin du XIXe siècle cherche à représenter la réalité sociale de façon objective?",
                                                    answers: ["Le naturalisme", "Le classicisme", "Le dadaïsme"],
                                                    correct: "Le naturalisme",
                                                    explanation: "Le naturalisme, dont Émile Zola est le principal représentant, cherche à appliquer à la littérature les méthodes des sciences expérimentales pour décrire objectivement la réalité sociale, souvent dans ses aspects les plus sombres."
                                                },
                                                {
                                                    question: "Quels sont les principes fondamentaux du classicisme?",
                                                    answers: ["La raison, la mesure et l'imitation des Anciens", "L'expression des sentiments et du moi", "La description objective de la réalité"],
                                                    correct: "La raison, la mesure et l'imitation des Anciens",
                                                    explanation: "Le classicisme, qui domine la littérature française au XVIIe siècle, se fonde sur la raison, la mesure, la vraisemblance et l'imitation des Anciens. Il valorise l'ordre, la clarté et le respect des règles, comme en témoignent les œuvres de Corneille, Racine et Molière."
                                                },
                                                {
                                                    question: "Quel mouvement littéraire du XVIIIe siècle est associé aux philosophes des Lumières?",
                                                    answers: ["Le mouvement des Lumières", "Le baroque", "Le romantisme"],
                                                    correct: "Le mouvement des Lumières",
                                                    explanation: "Le mouvement des Lumières, au XVIIIe siècle, est porté par des philosophes comme Voltaire, Rousseau, Diderot et Montesquieu qui utilisent la littérature pour diffuser leurs idées de progrès, de raison, de liberté et de tolérance."
                                                },
                                                {
                                                    question: "Quel mouvement poétique de la fin du XIXe siècle privilégie la suggestion et la musicalité?",
                                                    answers: ["Le symbolisme", "Le Parnasse", "Le dadaïsme"],
                                                    correct: "Le symbolisme",
                                                    explanation: "Le symbolisme, représenté notamment par Mallarmé, Verlaine et Rimbaud, privilégie la suggestion plutôt que la description, la musicalité du vers et l'expression de réalités invisibles à travers des symboles."
                                                },
                                                {
                                                    question: "Quelle est la principale caractéristique du Nouveau Roman des années 1950-1960?",
                                                    answers: ["La remise en question des conventions romanesques traditionnelles", "Le retour aux valeurs classiques", "L'engagement politique direct"],
                                                    correct: "La remise en question des conventions romanesques traditionnelles",
                                                    explanation: "Le Nouveau Roman, avec des auteurs comme Alain Robbe-Grillet, Nathalie Sarraute et Michel Butor, se caractérise par la remise en question des conventions romanesques traditionnelles: refus de l'intrigue linéaire, de la psychologie des personnages et de l'omniscience du narrateur."
                                                },
                                                {
                                                    question: "Quel mouvement littéraire du début du XXe siècle prône la rupture avec les conventions artistiques et la provocation?",
                                                    answers: ["Le dadaïsme", "L'existentialisme", "Le réalisme"],
                                                    correct: "Le dadaïsme",
                                                    explanation: "Le dadaïsme, né pendant la Première Guerre mondiale autour de Tristan Tzara, prône la rupture radicale avec les conventions artistiques, la provocation et l'absurde comme réaction au chaos du monde et à l'absurdité de la guerre."
                                                },
                                                {
                                                    question: "Quel courant philosophique et littéraire, représenté notamment par Sartre et Camus, s'est développé après la Seconde Guerre mondiale?",
                                                    answers: ["L'existentialisme", "Le structuralisme", "Le surréalisme"],
                                                    correct: "L'existentialisme",
                                                    explanation: "L'existentialisme, représenté notamment par Jean-Paul Sartre et Albert Camus, s'est développé après la Seconde Guerre mondiale. Il place au centre de sa réflexion la liberté et la responsabilité de l'homme dans un monde absurde où 'l'existence précède l'essence'."
                                                },
                                                {
                                                    question: "Quel mouvement poétique du XIXe siècle, dont Théophile Gautier est un représentant, prône 'l'art pour l'art'?",
                                                    answers: ["Le Parnasse", "Le romantisme", "Le réalisme"],
                                                    correct: "Le Parnasse",
                                                    explanation: "Le Parnasse est un mouvement poétique du XIXe siècle qui prône 'l'art pour l'art', le culte de la beauté formelle et l'impersonnalité de l'œuvre, en réaction contre le lyrisme romantique. Théophile Gautier, Leconte de Lisle et José-Maria de Heredia en sont des représentants."
                                                }
                                            ]
                                        }
                                    ]
                                }
                                ]
                            },
                        ],
                        
           characters : [
                {
                    name: "Calao",
                    image: "images.jpg ",
                    expressions: {
                        happy: "image.jpg",
                        sad: "images.jpg",
                        neutral: "images.jpg",
                        excited: "images.jpg"
                    },
                    dialog: {
                        welcome: [
                            "Bienvenue dans 𝓚𝓪𝓽𝓬𝓱𝓪𝓷𝔀𝓪! Je suis Calao(connaissance) et je serai votre guide.",
                            "Prêt à développer vos connaissances? Allons-y!"
                        ],
                        correct: [
                            "Excellent travail!",
                            "Bravo, c'est la bonne réponse!",
                            "Tu as tout compris!",
                            "Continue comme ça!"
                        ],
                        incorrect: [
                            "Pas exactement, mais continuons à apprendre!",
                            "Ce n'est pas correct, mais ne te décourage pas!",
                            "Erreur, mais c'est en se trompant qu'on apprend!"
                        ],
                        complete: [
                            "Tu as terminé cette leçon! Impressionnant!",
                            "Bravo pour ton travail et ta persévérance!"
                        ]
                    }
                },
                {
                    name: "Caméleon",
                    image: "cameleon.jpg",
                    expressions: {
                        happy: "cameleon.jpg",
                        sad: "cameleon.jpg",
                        neutral: "cameleon.jpg",
                        excited: "cameleon.jpg"
                    },
                    dialog: {
                        welcome: [
                            "Bonjour et bienvenue! Je suis Caméleon, ravie de t'accompagner.",
                            "Ensemble, nous allons explorer de nouvelles connaissances!"
                        ],
                        correct: [
                            "Parfait!",
                            "C'est exactement ça!",
                            "Tu maîtrises bien ce sujet!",
                            "Quelle précision!"
                        ],
                        incorrect: [
                            "Pas tout à fait, révisons ensemble.",
                            "Essaie de réfléchir différemment.",
                            "Ne t'inquiète pas, on apprend de ses erreurs."
                        ],
                        complete: [
                            "Félicitations pour avoir complété cette leçon!",
                            "Ton effort a porté ses fruits, je suis fière de toi!"
                        ]
                    }
                }
            ],
            get Characters() {
                return this._Characters;
            },
            set Characters(value) {
                this._Characters = value;
            },
        };

        // Variables globales
        let currentView = "inscription-view";
        let currentClass = null;
        let currentSubject = null;
        let currentLesson = null;
        let currentQuestionIndex = 0;
        let score = 0;
        let userAnswers = [];
        let currentCharacter = null;
        let streak = 0;
        let xp = 0;
        let level = 1;
        let musicEnabled = true;
        let soundEffectsEnabled = true;
        let darkMode = true;
        let currentMusic = "study";
        let highContrast = false;
        let largeText = false;
        let progressData = {}; // Pour stocker la progression de l'utilisateur
        let userProfile = {
            nom: "",
            prenom: "",
            age: "",
            classe: "Première C",
            matierePreferee: []
        };

        // Éléments DOM
        const views = document.querySelectorAll('.view');
        const backgroundMusic = document.getElementById('background-music');
        const correctSound = document.getElementById('correct-sound');
        const incorrectSound = document.getElementById('incorrect-sound');
        const levelUpSound = document.getElementById('level-up-sound');
        const statsBar = document.getElementById('stats-bar');
        const notification = document.getElementById('notification');

  document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    loadUserData();
    currentCharacter = gameData.characters[Math.floor(Math.random() * gameData.characters.length)];
    updateCharacterInView('menu-view', 'welcome');
    setupEventListeners();
    applyAccessibilitySettings();

    // Ajout : forcer la lecture de la musique après la première interaction utilisateur
    document.body.addEventListener('click', function onceClick() {
        updateMusicSource();
        document.body.removeEventListener('click', onceClick);
    });
});

        // Fonction pour charger les paramètres
        function loadSettings() {
            const savedSettings = localStorage.getItem('katchanwa-settings');
            if (savedSettings) {
                try {
                    const settings = JSON.parse(savedSettings);
                    musicEnabled = settings.musicEnabled !== undefined ? settings.musicEnabled : true;
                    soundEffectsEnabled = settings.soundEffectsEnabled !== undefined ? settings.soundEffectsEnabled : true;
                    darkMode = settings.darkMode !== undefined ? settings.darkMode : true;
                    currentMusic = settings.currentMusic || "study";
                    highContrast = settings.highContrast || false;
                    largeText = settings.largeText || false;
                    
                    // Mettre à jour les contrôles de paramètres
                    document.getElementById('music-toggle').checked = musicEnabled;
                    document.getElementById('sound-effects-toggle').checked = soundEffectsEnabled;
                    document.getElementById('dark-mode-toggle').checked = darkMode;
                    document.getElementById('high-contrast-toggle').checked = highContrast;
                    document.getElementById('large-text-toggle').checked = largeText;
                    
                    const musicRadios = document.querySelectorAll('input[name="music-type"]');
                    musicRadios.forEach(radio => {
                        if (radio.value === currentMusic) {
                            radio.checked = true;
                        }
                    });
                    
                    // Mettre à jour la source de la musique
                    updateMusicSource();
                } catch (error) {
                    console.error("Erreur lors du chargement des paramètres:", error);
                    // Réinitialiser les paramètres en cas d'erreur
                    resetSettings();
                }
            }
        }

        // Fonction pour réinitialiser les paramètres
        function resetSettings() {
            musicEnabled = true;
            soundEffectsEnabled = true;
            darkMode = true;
            currentMusic = "study";
            highContrast = false;
            largeText = false;
            
            // Mettre à jour les contrôles
            document.getElementById('music-toggle').checked = true;
            document.getElementById('sound-effects-toggle').checked = true;
            document.getElementById('dark-mode-toggle').checked = true;
            document.getElementById('high-contrast-toggle').checked = false;
            document.getElementById('large-text-toggle').checked = false;
            document.getElementById('music-study').checked = true;
            
            // Sauvegarder les paramètres par défaut
            saveSettings();
        }

        // Fonction pour sauvegarder les paramètres
        function saveSettings() {
            const settings = {
                musicEnabled,
                soundEffectsEnabled,
                darkMode,
                currentMusic,
                highContrast,
                largeText
            };
            
            try {
                localStorage.setItem('katchanwa-settings', JSON.stringify(settings));
                showNotification("Paramètres sauvegardés avec succès!");
            } catch (error) {
                console.error("Erreur lors de la sauvegarde des paramètres:", error);
                showNotification("Erreur lors de la sauvegarde des paramètres", "error");
            }
        }

        // Fonction pour charger les données utilisateur et la progression
        function loadUserData() {
            try {
                // Charger le profil utilisateur
                const storedProfile = localStorage.getItem("user-profile");
                if (storedProfile) {
                    userProfile = JSON.parse(storedProfile);
                    changeView('menu-view');
                }
                
                // Charger la progression
                const storedProgress = localStorage.getItem("katchanwa-progress");
                if (storedProgress) {
                    progressData = JSON.parse(storedProgress);
                    
                    // Charger les statistiques
                    if (progressData.stats) {
                        streak = progressData.stats.streak || 0;
                        xp = progressData.stats.xp || 0;
                        level = progressData.stats.level || 1;
                    }
                    
                    updateStats();
                }
            } catch (error) {
                console.error("Erreur lors du chargement des données utilisateur:", error);
                // En cas d'erreur, on continue avec les valeurs par défaut
            }
        }

        // Fonction pour sauvegarder la progression
        function saveProgress() {
            try {
                // Mettre à jour les statistiques dans progressData
                if (!progressData.stats) {
                    progressData.stats = {};
                }
                
                progressData.stats = {
                    streak,
                    xp,
                    level
                };
                
                // Sauvegarder la progression de la leçon actuelle si disponible
                if (currentClass && currentSubject && currentLesson) {
                    const lessonKey = `${currentClass.name}-${currentSubject.name}-${currentLesson.title}`;
                    
                    if (!progressData.lessons) {
                        progressData.lessons = {};
                    }
                    
                    progressData.lessons[lessonKey] = {
                        completed: currentQuestionIndex >= currentLesson.questions.length,
                        score: score,
                        totalQuestions: currentLesson.questions.length,
                        lastQuestionIndex: currentQuestionIndex
                    };
                }
                
                localStorage.setItem("katchanwa-progress", JSON.stringify(progressData));
            } catch (error) {
                console.error("Erreur lors de la sauvegarde de la progression:", error);
            }
        }

        // Appliquer les paramètres d'accessibilité
        function applyAccessibilitySettings() {
            // Mode sombre / clair
            if (darkMode) {
                document.body.classList.remove('light-mode');
                document.body.classList.add('text-white');
                document.body.classList.remove('text-gray-800');
            } else {
                document.body.classList.add('light-mode');
                document.body.classList.add('text-gray-800');
                document.body.classList.remove('text-white');
            }
            
            // Contraste élevé
            if (highContrast) {
                document.body.classList.add('high-contrast');
            } else {
                document.body.classList.remove('high-contrast');
            }
            
            // Texte plus grand
            if (largeText) {
                document.body.classList.add('large-text');
            } else {
                document.body.classList.remove('large-text');
            }
        }

        // Fonction pour changer de vue
        function changeView(viewId) {
            views.forEach(view => {
                view.classList.remove('active');
            });
            document.getElementById(viewId).classList.add('active');
            currentView = viewId;

            // Afficher ou masquer la barre de statistiques
            if (viewId === 'inscription-view') {
                statsBar.classList.add('hidden');
            } else {
                statsBar.classList.remove('hidden');
                updateStats();
            }

            // Mettre à jour le personnage selon la vue
            if (viewId !== 'inscription-view') {
                const viewType = viewId.split('-')[0];
                updateCharacterInView(viewType, 'welcome');
            }
            
            // Sauvegarder la progression à chaque changement de vue
            saveProgress();
            
            // Annoncer le changement de vue pour les lecteurs d'écran
            const viewTitle = document.getElementById(viewId).getAttribute('aria-label');
            announceForScreenReader(`Vue changée: ${viewTitle}`);
        }

        // Mettre à jour les statistiques affichées
        function updateStats() {
            document.getElementById('level-display').textContent = level;
            document.getElementById('streak-display').textContent = streak;
            document.getElementById('xp-display').textContent = xp;
            
            // Mettre à jour les attributs ARIA
            document.getElementById('level-display').setAttribute('aria-label', `Niveau ${level}`);
            document.getElementById('streak-display').setAttribute('aria-label', `Série de ${streak} bonnes réponses`);
            document.getElementById('xp-display').setAttribute('aria-label', `${xp} points d'expérience`);
        }

        // Annoncer pour les lecteurs d'écran
        function announceForScreenReader(message) {
            const announcer = document.createElement('div');
            announcer.setAttribute('aria-live', 'assertive');
            announcer.setAttribute('class', 'sr-only');
            announcer.textContent = message;
            document.body.appendChild(announcer);
            
            setTimeout(() => {
                document.body.removeChild(announcer);
            }, 1000);
        }

        // Mettre à jour le personnage dans une vue
        function updateCharacterInView(viewType, dialogType) {
            const characterImg = document.getElementById(`${viewType}-character-img`);
            const characterDialog = document.getElementById(`${viewType}-character-dialog`);
            
            if (characterImg && characterDialog) {
                let expression = 'neutral';
                switch (dialogType) {
                    case 'welcome': expression = 'neutral'; break;
                    case 'success': expression = 'happy'; break;
                    case 'error': expression = 'sad'; break;
                    case 'complete': expression = 'excited'; break;
                }
                
                characterImg.src = currentCharacter.expressions[expression];
                characterImg.alt = `${currentCharacter.name} avec une expression ${expression}`;
                
                const dialogs = currentCharacter.dialog[dialogType];
                const randomDialog = dialogs[Math.floor(Math.random() * dialogs.length)];
                
                // Personnaliser le dialogue avec le nom de l'utilisateur si disponible
                let personalizedDialog = randomDialog;
                if (userProfile.prenom) {
                    personalizedDialog = personalizedDialog.replace('!', `, ${userProfile.prenom}!`);
                }
                
                characterDialog.textContent = personalizedDialog;
            }
        }

        // Afficher une notification
        function showNotification(message, type = 'success') {
            const notificationElement = document.getElementById('notification');
            notificationElement.textContent = message;
            
            // Définir la couleur selon le type
            if (type === 'success') {
                notificationElement.className = 'fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 transform transition-transform duration-300';
            } else if (type === 'error') {
                notificationElement.className = 'fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 transform transition-transform duration-300';
            } else if (type === 'info') {
                notificationElement.className = 'fixed top-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg z-50 transform transition-transform duration-300';
            }
            
            // Afficher la notification
            setTimeout(() => {
                notificationElement.style.transform = 'translateX(0)';
            }, 100);
            
            // Masquer la notification après un délai
            setTimeout(() => {
                notificationElement.style.transform = 'translateX(100%)';
                
                setTimeout(() => {
                    notificationElement.textContent = '';
                }, 300);
            }, 3000);
        }

        // Configuration des gestionnaires d'événements
        function setupEventListeners() {
            // Formulaire d'inscription
            document.getElementById('profile-form').addEventListener('submit', handleProfileSubmit);
            
            // Boutons de menu
            document.getElementById('start-game-btn').addEventListener('click', () => changeView('classes-view'));
            document.getElementById('settings-btn').addEventListener('click', () => changeView('settings-view'));
            
            // Boutons retour
            document.querySelectorAll('.back-btn').forEach(btn => {
                btn.addEventListener('click', handleBackButton);
            });
            
            // Sélection de classe
            document.querySelectorAll('.class-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const className = this.getAttribute('data-class');
                    selectClass(className);
                });
            });
            
            // Paramètres
            document.getElementById('music-toggle').addEventListener('change', function() {
                musicEnabled = this.checked;
                toggleMusic();
            });
            
            document.getElementById('sound-effects-toggle').addEventListener('change', function() {
                soundEffectsEnabled = this.checked;
            });
            
            document.getElementById('dark-mode-toggle').addEventListener('change', function() {
                darkMode = this.checked;
                applyAccessibilitySettings();
            });
            
            document.getElementById('large-text-toggle').addEventListener('change', function() {
                largeText = this.checked;
                applyAccessibilitySettings();
            });
            
            document.getElementById('high-contrast-toggle').addEventListener('change', function() {
                highContrast = this.checked;
                applyAccessibilitySettings();
            });
            
            document.querySelectorAll('input[name="music-type"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    currentMusic = this.value;
                    changeMusic();
                });
            });
            
            document.getElementById('save-settings-btn').addEventListener('click', saveSettings);
            document.getElementById('reset-profile-btn').addEventListener('click', resetProfile);
            
            // Jeu
            document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
            
            // Résumé
            document.getElementById('replay-btn').addEventListener('click', replayLesson);
            document.getElementById('next-lesson-btn').addEventListener('click', nextLesson);
            
            // Bouton de musique dans l'en-tête
            document.getElementById('toggleMusic').addEventListener('click', function() {
                musicEnabled = !musicEnabled;
                document.getElementById('music-toggle').checked = musicEnabled;
                toggleMusic();
            });
            
            // Ouvrir les paramètres depuis l'en-tête
            document.getElementById('openSettings').addEventListener('click', function() {
                changeView('settings-view');
            });
        }

        // Gestion du formulaire d'inscription
        function handleProfileSubmit(e) {
            e.preventDefault();
            
            // Récupérer les valeurs
            const nom = document.getElementById('nom').value.trim();
            const prenom = document.getElementById('prenom').value.trim();
            const age = document.getElementById('age').value.trim();
            const classe = document.getElementById('classe').value;
            
            const matierePreferee = [];
            document.querySelectorAll('input[name="matieres"]:checked').forEach(checkbox => {
                matierePreferee.push(checkbox.value);
            });
            
            // Vérifier les champs obligatoires
            let hasError = false;
            
            if (!nom) {
                document.getElementById('nom-error').classList.remove('hidden');
                hasError = true;
            } else {
                document.getElementById('nom-error').classList.add('hidden');
            }
            
            if (!prenom) {
                document.getElementById('prenom-error').classList.remove('hidden');
                hasError = true;
            } else {
                document.getElementById('prenom-error').classList.add('hidden');
            }
            
            if (!age) {
                document.getElementById('age-error').classList.remove('hidden');
                hasError = true;
            } else {
                document.getElementById('age-error').classList.add('hidden');
            }
            
            if (matierePreferee.length === 0) {
                document.getElementById('matieres-error').classList.remove('hidden');
                hasError = true;
            } else {
                document.getElementById('matieres-error').classList.add('hidden');
            }
            
            if (hasError) return;
            
            // Enregistrer le profil
            userProfile = {
                nom,
                prenom,
                age,
                classe,
                matierePreferee
            };
            
            try {
                localStorage.setItem("user-profile", JSON.stringify(userProfile));
                
                // Passer à l'écran suivant
                changeView('menu-view');
                showNotification(`Bienvenue, ${userProfile.prenom} ${userProfile.nom}!`);
                
                // Mettre à jour le dialogue du personnage avec le nom de l'utilisateur
                updateCharacterInView('menu', 'welcome');
            } catch (error) {
                console.error("Erreur lors de l'enregistrement du profil:", error);
                showNotification("Erreur lors de l'enregistrement du profil", "error");
            }
        }

        // Gestion du bouton retour
        function handleBackButton() {
            switch (currentView) {
                case 'classes-view':
                    changeView('menu-view');
                    break;
                case 'subjects-view':
                    changeView('classes-view');
                    break;
                case 'lessons-view':
                    changeView('subjects-view');
                    break;
                case 'game-view':
                    // Demander confirmation si un quiz est en cours
                    if (currentQuestionIndex > 0 && currentQuestionIndex < currentLesson.questions.length) {
                        if (confirm("Voulez-vous vraiment quitter? Votre progression sera sauvegardée.")) {
                            saveProgress();
                            changeView('lessons-view');
                        }
                    } else {
                        changeView('lessons-view');
                    }
                    break;
                case 'summary-view':
                    changeView('lessons-view');
                    break;
                case 'settings-view':
                    changeView('menu-view');
                    break;
                default:
                    changeView('menu-view');
            }
        }

        // Sélection d'une classe
        function selectClass(className) {
            currentClass = gameData.classes.find(c => c.name === className);
            if (currentClass) {
                // Mettre à jour le titre
                document.getElementById('subjects-title').textContent = `Matières - ${currentClass.name}`;
                
                // Générer les matières
                const subjectsContainer = document.getElementById('subjects-container');
                subjectsContainer.innerHTML = '';
                
                currentClass.subjects.forEach(subject => {
                    const subjectCard = document.createElement('button');
                    subjectCard.className = `subject-card bg-${subject.color.split('-')[1]}-100 hover:bg-${subject.color.split('-')[1]}-200 text-${subject.color.split('-')[1]}-800 font-bold py-6 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-left`;
                    subjectCard.setAttribute('aria-label', `${subject.name} - ${subject.lessons.length} leçons`);
                    
                    subjectCard.innerHTML = `
                        <div class="flex items-center">
                            <div class="text-3xl mr-3" aria-hidden="true">${subject.icon}</div>
                            <div>
                                <h3 class="text-xl font-bold">${subject.name}</h3>
                                <p class="text-${subject.color.split('-')[1]}-600">${subject.lessons.length} leçons</p>
                            </div>
                        </div>
                    `;
                    
                    // Vérifier si la matière a des leçons terminées
                    let completedLessons = 0;
                    subject.lessons.forEach(lesson => {
                        const lessonKey = `${currentClass.name}-${subject.name}-${lesson.title}`;
                        if (progressData.lessons && progressData.lessons[lessonKey] && progressData.lessons[lessonKey].completed) {
                            completedLessons++;
                        }
                    });
                    
                    if (completedLessons > 0) {
                        const progressElement = document.createElement('div');
                        progressElement.className = 'mt-2';
                        progressElement.innerHTML = `
                            <div class="w-full bg-${subject.color.split('-')[1]}-200 rounded-full h-2.5">
                                <div class="bg-${subject.color.split('-')[1]}-600 h-2.5 rounded-full" style="width: ${(completedLessons / subject.lessons.length) * 100}%"></div>
                            </div>
                            <p class="text-xs mt-1 text-${subject.color.split('-')[1]}-700">${completedLessons}/${subject.lessons.length} leçons terminées</p>
                        `;
                        subjectCard.appendChild(progressElement);
                    }
                    
                    subjectCard.addEventListener('click', () => selectSubject(subject));
                    subjectsContainer.appendChild(subjectCard);
                });
                
                changeView('subjects-view');
            }
        }

        // Sélection d'une matière
        function selectSubject(subject) {
            currentSubject = subject;
            
            // Mettre à jour le titre
            document.getElementById('lessons-title').textContent = `Leçons - ${subject.name}`;
            
            // Générer les leçons
            const lessonsContainer = document.getElementById('lessons-container');
            lessonsContainer.innerHTML = '';
            
            subject.lessons.forEach(lesson => {
                const lessonCard = document.createElement('button');
                lessonCard.className = `lesson-card bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-medium py-4 px-6 rounded-lg shadow-sm transition duration-300 ease-in-out text-left`;
                lessonCard.setAttribute('aria-label', `${lesson.title} - ${lesson.description} - ${lesson.questions.length} questions`);
                
                // Vérifier si la leçon a été commencée ou terminée
                const lessonKey = `${currentClass.name}-${currentSubject.name}-${lesson.title}`;
                let lessonStatus = '';
                let statusClass = '';
                
                if (progressData.lessons && progressData.lessons[lessonKey]) {
                    const lessonProgress = progressData.lessons[lessonKey];
                    if (lessonProgress.completed) {
                        lessonStatus = `Terminé - Note: ${Math.round((lessonProgress.score / lessonProgress.totalQuestions) * 20)}/20`;
                        statusClass = 'text-green-600 bg-green-100';
                    } else {
                        lessonStatus = 'En cours';
                        statusClass = 'text-yellow-600 bg-yellow-100';
                    }
                } else {
                    lessonStatus = 'Nouveau';
                    statusClass = 'text-blue-600 bg-blue-100';
                }
                
                lessonCard.innerHTML = `
                    <h3 class="text-lg font-bold mb-1">${lesson.title}</h3>
                    <p class="text-gray-600">${lesson.description}</p>
                    <div class="mt-2 flex justify-between items-center">
                        <span class="text-sm text-purple-600">${lesson.questions.length} questions</span>
                        <span class="text-sm ${statusClass} py-1 px-2 rounded">${lessonStatus}</span>
                    </div>
                `;
                
                lessonCard.addEventListener('click', () => selectLesson(lesson));
                lessonsContainer.appendChild(lessonCard);
            });
            
            changeView('lessons-view');
        }

        // Sélection d'une leçon
        function selectLesson(lesson) {
            currentLesson = lesson;
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = [];
            
            // S'assurer que chaque leçon a exactement 10 questions
            if (currentLesson.questions.length > 10) {
                // Si plus de 10 questions, prendre 10 questions aléatoires
                currentLesson.questions = [...lesson.questions]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 10);
            } else if (currentLesson.questions.length < 10) {
                // Si moins de 10 questions, dupliquer certaines questions
                const originalQuestions = [...lesson.questions];
                while (currentLesson.questions.length < 10) {
                    const randomQuestion = originalQuestions[Math.floor(Math.random() * originalQuestions.length)];
                    currentLesson.questions.push({...randomQuestion});
                }
                // Mélanger les questions
                currentLesson.questions.sort(() => Math.random() - 0.5);
            } else {
                // Si exactement 10 questions, juste les mélanger
                currentLesson.questions = [...lesson.questions].sort(() => Math.random() - 0.5);
            }
            
            // Vérifier si la leçon a été commencée mais non terminée
            const lessonKey = `${currentClass.name}-${currentSubject.name}-${currentLesson.title}`;
            if (progressData.lessons && progressData.lessons[lessonKey] && !progressData.lessons[lessonKey].completed && progressData.lessons[lessonKey].lastQuestionIndex > 0) {
                // Demander à l'utilisateur s'il veut reprendre où il s'était arrêté
                if (confirm(`Vous avez déjà commencé cette leçon. Voulez-vous reprendre à la question ${progressData.lessons[lessonKey].lastQuestionIndex + 1}?`)) {
                    currentQuestionIndex = progressData.lessons[lessonKey].lastQuestionIndex;
                    score = progressData.lessons[lessonKey].score || 0;
                }
            }
            
            // Mettre à jour le titre
            document.getElementById('game-title').textContent = `${currentSubject.name} - ${lesson.title}`;
            
            // Afficher la première question
            displayQuestion();
            
            changeView('game-view');
        }

        // Afficher une question
        function displayQuestion() {
            const question = currentLesson.questions[currentQuestionIndex];
            
            // Mettre à jour le compteur de questions
            document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1}/${currentLesson.questions.length}:`;
            
            // Mettre à jour le texte de la question
            document.getElementById('question-text').textContent = question.question;
            
            // Générer les réponses
            const answersContainer = document.getElementById('answers-container');
            answersContainer.innerHTML = '';
            
            // Mélanger les réponses pour chaque question
            const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);
            
            shuffledAnswers.forEach((answer, index) => {
                const answerButton = document.createElement('button');
                answerButton.className = 'option-button bg-white border-2 border-gray-300 hover:border-purple-500 text-gray-800 font-medium py-3 px-4 rounded-lg text-left';
                answerButton.textContent = answer;
                answerButton.setAttribute('role', 'radio');
                answerButton.setAttribute('aria-checked', 'false');
                answerButton.setAttribute('aria-label', `Option ${index + 1}: ${answer}`);
                answerButton.setAttribute('data-answer', answer);
                
                answerButton.addEventListener('click', () => {
                    const isCorrect = answer === question.correct;
                    handleAnswerClick(answerButton, isCorrect);
                });
                
                answersContainer.appendChild(answerButton);
            });
            
            // Masquer l'explication, le feedback et le bouton suivant
            document.getElementById('explanation-container').classList.add('hidden');
            document.getElementById('feedback-container').classList.add('hidden');
            document.getElementById('next-question-btn').classList.add('hidden');
            
            // Mettre à jour la barre de progression
            const progressPercentage = (currentQuestionIndex / currentLesson.questions.length) * 100;
            document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
            document.getElementById('progress-fill').setAttribute('aria-valuenow', progressPercentage);
            
            // Mettre à jour le dialogue du personnage
            updateCharacterInView('game', 'welcome');
            
            // Annoncer la question pour les lecteurs d'écran
            announceForScreenReader(`Question ${currentQuestionIndex + 1} sur ${currentLesson.questions.length}: ${question.question}`);
        }

        // Gérer le clic sur une réponse
        function handleAnswerClick(button, isCorrect) {
            const question = currentLesson.questions[currentQuestionIndex];
            const userAnswer = button.getAttribute('data-answer');
            
            // Enregistrer la réponse de l'utilisateur
            userAnswers.push(userAnswer);
            
            // Mettre à jour le score et les statistiques
            if (isCorrect) {
                score++;
                streak++;
                xp += 10;
                
                if (xp >= level * 100) {
                    level++;
                    xp = 0;
                    launchConfetti();
                    if (soundEffectsEnabled) {
                        levelUpSound.play().catch(e => console.log("Erreur de lecture audio:", e));
                    }
                    showNotification(`Félicitations! Vous avez atteint le niveau ${level}!`, 'success');
                }
                
                // Jouer le son de réponse correcte
                if (soundEffectsEnabled) {
                    correctSound.play().catch(e => console.log("Erreur de lecture audio:", e));
                }
                
                // Afficher le feedback de réponse correcte
                showFeedback(true);
                
                // Lancer les emojis de célébration
                showEmojis(true);
            } else {
                streak = 0;
                
                // Jouer le son de réponse incorrecte
                if (soundEffectsEnabled) {
                    incorrectSound.play().catch(e => console.log("Erreur de lecture audio:", e));
                }
                
                // Afficher le feedback de réponse incorrecte
                showFeedback(false);
                
                // Lancer les emojis de déception
                showEmojis(false);
            }
            
            updateStats();
            saveProgress();
            
            // Mettre en évidence la bonne réponse
            const answerButtons = document.querySelectorAll('#answers-container button');
            answerButtons.forEach(btn => {
                const btnAnswer = btn.getAttribute('data-answer');
                
                if (btnAnswer === userAnswer && isCorrect) {
                    btn.classList.add('correct');
                    btn.setAttribute('aria-checked', 'true');
                } else if (btnAnswer === userAnswer && !isCorrect) {
                    btn.classList.add('incorrect');
                    btn.setAttribute('aria-checked', 'false');
                } else if (btnAnswer === question.correct) {
                    btn.classList.add('correct');
                }
                
                // Désactiver tous les boutons
                btn.disabled = true;
            });
            
            // Afficher l'explication
            document.getElementById('explanation-text').textContent = question.explanation;
            document.getElementById('explanation-container').classList.remove('hidden');
            
            // Afficher le bouton pour passer à la question suivante
            document.getElementById('next-question-btn').classList.remove('hidden');
            document.getElementById('next-question-btn').focus();
            
            // Annoncer le résultat pour les lecteurs d'écran
            if (isCorrect) {
                announceForScreenReader(`Correct! ${question.explanation}`);
            } else {
                announceForScreenReader(`Incorrect. La bonne réponse était: ${question.correct}. ${question.explanation}`);
            }
        }

        // Afficher le feedback après une réponse
        function showFeedback(isCorrect) {
            const feedbackContainer = document.getElementById('feedback-container');
            const feedbackCharacter = document.getElementById('feedback-character');
            const feedbackText = document.getElementById('feedback-text');
            
            // Configurer le conteneur de feedback
            feedbackContainer.className = isCorrect ? 
                'feedback-container feedback-correct' : 
                'feedback-container feedback-incorrect';
            
            // Configurer l'image du personnage
            feedbackCharacter.src = isCorrect ? 
                currentCharacter.expressions.happy : 
                currentCharacter.expressions.sad;
            
            feedbackCharacter.alt = `${currentCharacter.name} ${isCorrect ? 'content' : 'déçu'}`;
            
            // Configurer le texte de feedback
            const feedbackMessages = isCorrect ? 
                currentCharacter.dialog.correct : 
                currentCharacter.dialog.incorrect;
            
            feedbackText.textContent = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
            
            // Afficher le feedback
            feedbackContainer.classList.remove('hidden');
        }

        // Afficher les emojis de célébration ou de déception
        function showEmojis(isCorrect) {
            const emojiContainer = document.getElementById('emoji-container');
            emojiContainer.innerHTML = '';
            
            // Définir les emojis à afficher
            const emojis = isCorrect ? 
                ['🎉', '👏', '🥳', '⭐', '🏆', '💯', '🙌', '👍', '🤩'] : 
                ['😢', '😭', '😔', '😞', '👎', '💔', '😓', '🤦‍♂️', '🤦‍♀️'];
            
            // Créer et animer les emojis
            for (let i = 0; i < 15; i++) {
                const emoji = document.createElement('div');
                emoji.className = 'emoji';
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                
                // Positionner aléatoirement l'emoji
                const left = Math.random() * 100;
                const delay = Math.random() * 1.5;
                
                emoji.style.left = `${left}%`;
                emoji.style.animationDelay = `${delay}s`;
                
                emojiContainer.appendChild(emoji);
            }
            
            // Nettoyer les emojis après l'animation
            setTimeout(() => {
                emojiContainer.innerHTML = '';
            }, 5000);
        }

        // Passer à la question suivante
        function nextQuestion() {
            if (currentQuestionIndex < currentLesson.questions.length - 1) {
                currentQuestionIndex++;
                displayQuestion();
            } else {
                // Fin de la leçon
                showSummary();
            }
        }

        // Afficher le résumé de la leçon
        function showSummary() {
            // Mettre à jour le score
            document.getElementById('score-display').textContent = `Score: ${score}/${currentLesson.questions.length}`;
            
            // Calculer la note sur 20
            const grade = Math.round((score / currentLesson.questions.length) * 20);
            document.getElementById('grade-display').textContent = `Note: ${grade}/20`;
            
            // Générer le récapitulatif des questions
            const questionsRecap = document.getElementById('questions-recap');
            questionsRecap.innerHTML = '';
            
            currentLesson.questions.forEach((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                const questionDiv = document.createElement('div');
                questionDiv.className = `border-l-4 ${isCorrect ? 'border-green-500' : 'border-red-500'} pl-3`;
                questionDiv.setAttribute('aria-label', `Question ${index + 1}: ${isCorrect ? 'Correcte' : 'Incorrecte'}`);
                
                questionDiv.innerHTML = `
                    <p class="font-medium">${index + 1}. ${question.question}</p>
                    <p class="${isCorrect ? 'text-green-600' : 'text-red-600'}">
                        ${isCorrect ? '✓' : '✗'} Votre réponse: ${userAnswer || 'Aucune réponse'}
                    </p>
                    ${!isCorrect ? `<p class="text-gray-600">Réponse correcte: ${question.correct}</p>` : ''}
                `;
                
                questionsRecap.appendChild(questionDiv);
            });
            
            // Mettre à jour le dialogue du personnage
            updateCharacterInView('summary', 'complete');
            
            // Lancer des confettis pour célébrer
            if (score > currentLesson.questions.length / 2) {
                launchConfetti();
            }
            
            // Sauvegarder la progression finale de la leçon
            const lessonKey = `${currentClass.name}-${currentSubject.name}-${currentLesson.title}`;
            if (!progressData.lessons) {
                progressData.lessons = {};
            }
            
            progressData.lessons[lessonKey] = {
                completed: true,
                score: score,
                totalQuestions: currentLesson.questions.length,
                lastQuestionIndex: currentLesson.questions.length
            };
            
            saveProgress();
            changeView('summary-view');
            
            // Annoncer le résumé pour les lecteurs d'écran
            announceForScreenReader(`Leçon terminée! Votre score: ${score} sur ${currentLesson.questions.length}. Note: ${grade} sur 20.`);
        }

        // Rejouer la leçon
        function replayLesson() {
            selectLesson(currentLesson);
        }

        // Passer à la leçon suivante
        function nextLesson() {
            const lessonIndex = currentSubject.lessons.findIndex(l => l.title === currentLesson.title);
            if (lessonIndex < currentSubject.lessons.length - 1) {
                selectLesson(currentSubject.lessons[lessonIndex + 1]);
            } else {
                changeView('lessons-view');
                showNotification("Félicitations! Vous avez terminé toutes les leçons de cette matière!", "success");
            }
        }

        // Activer/désactiver la musique
        function toggleMusic() {
            if (musicEnabled) {
                backgroundMusic.play().catch(e => console.log("Erreur de lecture audio:", e));
            } else {
                backgroundMusic.pause();
            }
        }

        // Changer le type de musique
        function changeMusic() {
            updateMusicSource();
            
            if (musicEnabled) {
                backgroundMusic.play().catch(e => console.log("Erreur de lecture audio:", e));
            }
        }

function changeMusic() {
    updateMusicSource(true);
}

function updateMusicSource(forcePlay = false) {
    backgroundMusic.pause();

    switch (currentMusic) {
        case 'study':
            backgroundMusic.src = "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3";
            break;
        case 'relax':
            backgroundMusic.src = "c:\Users\LENOVO\Documents\htlm\1111.mp3.mp3";
            break;
        case 'focus':
            backgroundMusic.src = "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3";
            break;
    }

    backgroundMusic.load();

    if (musicEnabled || forcePlay) {
        backgroundMusic.play().catch(e => console.log("Erreur de lecture audio:", e));
    }
}

        // Réinitialiser le profil
        function resetProfile() {
            if (confirm("Êtes-vous sûr de vouloir réinitialiser votre profil? Toutes vos données seront perdues.")) {
                try {
                    localStorage.removeItem("user-profile");
                    localStorage.removeItem("katchanwa-progress");
                    
                    userProfile = {
                        nom: "",
                        prenom: "",
                        age: "",
                        classe: "Première C",
                        matierePreferee: []
                    };
                    
                    progressData = {};
                    
                    // Réinitialiser les statistiques
                    streak = 0;
                    xp = 0;
                    level = 1;
                    updateStats();
                    
                    // Retourner à l'écran d'inscription
                    changeView('inscription-view');
                    showNotification("Profil réinitialisé avec succès!", "info");
                } catch (error) {
                    console.error("Erreur lors de la réinitialisation du profil:", error);
                    showNotification("Erreur lors de la réinitialisation du profil", "error");
                }
            }
        }

        // Lancer des confettis
        function launchConfetti() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#10B981', '#6366F1', '#F59E0B', '#EF4444', '#8B5CF6']
            });
        }
        // Boutons de menu
        document.getElementById('dashboard-btn').addEventListener('click', () => changeView('dashboard-view'));
        document.getElementById('start-game-btn').addEventListener('click', () => changeView('classes-view'));
        document.getElementById('courses-btn').addEventListener('click', () => changeView('courses-view'));
        document.getElementById('badges-btn').addEventListener('click', () => changeView('badges-view'));
        document.getElementById('forum-btn').addEventListener('click', () => changeView('forum-view'));
        document.getElementById('teacher-btn').addEventListener('click', () => changeView('teacher-view'));
        document.getElementById('settings-btn').addEventListener('click', () => changeView('settings-view'));
        // Navigation pour les espaces Enseignant / Élève
document.getElementById('btn-enseignant').onclick = function() {
    showView('enseignant-view');
    renderQR();
    renderPDFs();
};
document.getElementById('btn-eleve').onclick = function() {
    showView('eleve-view');
    renderEleve();
};
document.querySelectorAll('#enseignant-view .back-btn, #eleve-view .back-btn').forEach(btn => {
    btn.onclick = () => showView('menu-view');
});

// Fonctions utilitaires stockage local
function getQR() {
    return JSON.parse(localStorage.getItem('qr-list') || '[]');
}
function setQR(list) {
    localStorage.setItem('qr-list', JSON.stringify(list));
}
function getPDFs() {
    return JSON.parse(localStorage.getItem('pdf-list') || '[]');
}
function setPDFs(list) {
    localStorage.setItem('pdf-list', JSON.stringify(list));
}

// Ajout question/réponse
const formQR = document.getElementById('form-question');
if(formQR) {
    formQR.onsubmit = function(e) {
        e.preventDefault();
        const question = document.getElementById('question').value.trim();
        const reponse = document.getElementById('reponse').value.trim();
        if (question && reponse) {
            const list = getQR();
            list.push({question, reponse});
            setQR(list);
            document.getElementById('question').value = '';
            document.getElementById('reponse').value = '';
            renderQR();
        }
    };
}

// Affichage questions/réponses enseignant
function renderQR() {
    const list = getQR();
    const ul = document.getElementById('liste-qr');
    if (!ul) return;
    ul.innerHTML = '';
    list.forEach((qr, i) => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${qr.question}</b> — ${qr.reponse} <button class="text-red-600 ml-4" onclick="deleteQR(${i})">Supprimer</button>`;
        ul.appendChild(li);
    });
}
window.deleteQR = function(i) {
    const list = getQR();
    list.splice(i, 1);
    setQR(list);
    renderQR();
};

// Upload PDF (stocké en base64 dans LocalStorage pour la démo)
const uploadBtn = document.getElementById('upload-pdf');
if(uploadBtn) {
    uploadBtn.onclick = function() {
        const fileInput = document.getElementById('pdf-file');
        if (!fileInput.files[0]) return alert('Sélectionnez un fichier PDF.');
        const file = fileInput.files[0];
        if (file.type !== 'application/pdf') return alert('Format PDF uniquement !');
        const reader = new FileReader();
        reader.onload = function(e) {
            const list = getPDFs();
            list.push({name: file.name, data: e.target.result});
            setPDFs(list);
            fileInput.value = '';
            renderPDFs();
        };
        reader.readAsDataURL(file);
    };
}

// Affichage fichiers PDF enseignant
function renderPDFs() {
    const list = getPDFs();
    const ul = document.getElementById('liste-pdf');
    if (!ul) return;
    ul.innerHTML = '';
    list.forEach((pdf, i) => {
        const li = document.createElement('li');
        li.innerHTML = `${pdf.name} <a href="${pdf.data}" download="${pdf.name}" class="text-blue-600 underline ml-2">Télécharger</a> <button class="text-red-600 ml-2" onclick="deletePDF(${i})">Supprimer</button>`;
        ul.appendChild(li);
    });
}
window.deletePDF = function(i) {
    const list = getPDFs();
    list.splice(i, 1);
    setPDFs(list);
    renderPDFs();
};

// Espace élève : affichage QR et PDF
function renderEleve() {
    // QR
    const qr = getQR();
    const ulQR = document.getElementById('eleve-qr');
    if (ulQR) {
        ulQR.innerHTML = '';
        qr.forEach(qr => {
            const li = document.createElement('li');
            li.innerHTML = `<b>${qr.question}</b> — ${qr.reponse}`;
            ulQR.appendChild(li);
        });
    }
    // PDFs
    const pdfs = getPDFs();
    const ulPDF = document.getElementById('eleve-pdf');
    if (ulPDF) {
        ulPDF.innerHTML = '';
        pdfs.forEach(pdf => {
            const li = document.createElement('li');
            li.innerHTML = `${pdf.name} <a href="${pdf.data}" download="${pdf.name}" class="text-blue-600 underline ml-2">Télécharger</a>`;
            ulPDF.appendChild(li);
        });
    }
}

// Utilitaire pour afficher une vue et cacher les autres
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    const v = document.getElementById(viewId);
    if(v) v.style.display = '';
}
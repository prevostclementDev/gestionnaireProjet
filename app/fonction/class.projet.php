<?php

    class generate_page {

        public static function generateHeader() {
            return '
            
                <div class="topVisibleHeader">

                    <div class="containsTitle">

                        <h1>Gestionnaire de projet</h1>
                        <h2>22 Juillet 2022</h2>

                    </div>

                </div>

                <nav id="navigationHeader">

                    <ul class="listMenu">
                        <li><a href="?page=accueil" class="active">
                            <i class="fa-solid fa-house"></i>
                            <span>Accueil</span>
                        </a></li>
                        <li><a href="?page=recently">
                            <i class="fa-solid fa-clock-rotate-left"></i>
                            <span>Projet recent</span>
                        </a></li>
                        <li><a href="?page=actual">
                            <i class="fa-solid fa-clock"></i>
                            <span>Projet en cours</span>
                        </a></li>
                        <li><a href="?page=finish">
                            <i class="fa-solid fa-calendar-check"></i>
                            <span>Projet fini</span>
                        </a></li>
                        <li><a href="?page=search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span>Recherche</span>
                        </a></li>
                    </ul>

                </nav>

            ';

        }

        public static function generateAccueil() {
            return '
            <div class="list-recentlyView">

            <h2>Dernier(s) projet(s)</h2>

            <div class="container-list">

                <div class="projet">

                    <h2>Gestionnaire de tâches</h2>
                    <div class="projectPourcentView">
                        <div class="pourcentBar"><span style="width: 16%;"></span></div>
                        <h4>16%</h4>
                    </div>

                    <h4> 6 tâches sur 23 réalisées </h4>

                    <a href="?page=singleProject&projectName=gestionnaire_projet">Voir</a>

                </div>

                <div class="projet">

                    <h2>File Manager</h2>
                    <div class="projectPourcentView">
                        <div class="pourcentBar"><span style="width: 60%;"></span></div>
                        <h4>60%</h4>
                    </div>

                    <h4> 6 tâches sur 10 réalisées </h4>

                    <a href="?page=singleProject&projectName=gestionnaire_projet">Voir</a>

                </div>

                <div class="projet">

                    <h2>Portfolio</h2>
                    <div class="projectPourcentView">
                        <div class="pourcentBar"><span style="width: 20%;"></span></div>
                        <h4>20%</h4>
                    </div>

                    <h4> 2 tâches sur 20 réalisées </h4>

                    <a href="?page=singleProject&projectName=gestionnaire_projet">Voir</a>

                </div>

                <div class="projet">

                    <h2>Partiel B2 S1</h2>
                    <div class="projectPourcentView">
                        <div class="pourcentBar"><span style="width: 30%;"></span></div>
                        <h4>30%</h4>
                    </div>

                    <h4> 6 tâches sur 19 réalisées </h4>

                    <a href="?page=singleProject&projectName=gestionnaire_projet">Voir</a>

                </div>

                <div class="projet">

                    <h2>Révision PHP</h2>
                    <div class="projectPourcentView">
                        <div class="pourcentBar"><span style="width: 52%;"></span></div>
                        <h4>52%</h4>
                    </div>

                    <h4> 6 tâches sur 13 réalisées </h4>

                    <a href="?page=singleProject&projectName=gestionnaire_projet">Voir</a>

                </div>

            </div>

            </div>

            <div class="statistique">

            <ul class="statList">

                <li>
                    <div class="round-information">15</div>
                    <div class="information-about-round">Projet(s) en cours</div>
                </li>

                <li>
                    <div class="round-information">9</div>
                    <div class="information-about-round">Projet(s) fini(s)</div>
                </li>

                <li>
                    <div class="round-information">38</div>
                    <div class="information-about-round">Tâche(s) restante(s)</div>
                </li>

                <li>
                    <div class="round-information">128</div>
                    <div class="information-about-round">Tâche(s) fini(s)</div>
                </li>

            </ul>

            </div>
            ';

        }

    }
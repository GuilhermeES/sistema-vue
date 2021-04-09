<template>
        <div class="sidebar">
            <div class="logo">
                LOGO
            </div>
            <div class="menu-itens">
                <ul>
                    <li>
                        <router-link to="/dashboard">
                            <div class="itens">
                                <i class="fas fa-tachometer-alt"></i>
                                <strong>Dashboard</strong>
                            </div>
                        </router-link>
                    </li>
                     <li>
                        <router-link to="/usuarios">
                            <div class="itens">
                                <i class="fas fa-users"></i>
                                <strong>Usuários</strong>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="sidebar-footer">
                <router-link to="/sobre">
                    <strong>Sobre</strong>
                </router-link>
            </div>
        </div>
</template>
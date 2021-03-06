import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css'
import TeacherItem from '../../components/TeacherItem';
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sao os proffys disponiveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject" />

                    </div>
                
                
                    <div className="input-block">
                        <label htmlFor="weak-day">Dia da semana</label>
                        <input type="text" id="weak-day" />

                    </div>
                
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />

                    </div>
                </form>

            </PageHeader>
            <main>
               <TeacherItem /> 
               <TeacherItem /> 
               <TeacherItem /> 
               <TeacherItem /> 
            </main>
        </div>
    )
}

export default TeacherList;
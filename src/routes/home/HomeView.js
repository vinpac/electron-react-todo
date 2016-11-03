import React from 'react'
import Link from 'react-router/Link'

class HomeView extends React.Component {
  render() {
    return (
      <div className="view-home">
        <div className="notes-list">
          <div className="note note-composer">
            <div className="note-card">
              <div className="note-block">
                <input type="text" className="input"/>
              </div>
            </div>
          </div>
          <div className="note">
            <div className="note-card">
              <div className="note-header">
                <h4 className="note-title">A fazer</h4>
              </div>
              <div className="note-block">
                <div className="note-checklist-progress">
                  <span className="note-progress-value">45%</span>
                  <div className="note-progress-bar">
                    <div className="note-progress-bar-value"></div>
                  </div>
                </div>
              </div>
              <div className="note-block-checklist">
                <div className="note-checklist-item">
                  <input type="checkbox" className="input note-checkbox"/>
                  <div className="note-checklist-item-content">
                    Reuniões diárias
                  </div>
                </div>
                <div className="note-checklist-item">
                  <input type="checkbox" className="input note-checkbox"/>
                  <div className="note-checklist-item-content">
                    Reuniões diárias sobre o que foi feito no dia, se teve problemas e precisa de ajuda e o que vai fazer amanhã
                  </div>
                </div>
                <div className="note-checklist-item">
                  <input type="checkbox" className="input note-checkbox"/>
                  <div className="note-checklist-item-content">
                    Reuniões toda segunda feira para decidir quais são as tasks e metas da semana, o que deu certo e o que deu errado no desenvolvimento das tals na semana
                  </div>
                </div>
                <div className="note-checklist-composer">
                  <input type="text" className="input" placeholder="Adicionar item..."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView

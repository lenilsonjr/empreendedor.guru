import React, { Component } from 'react';

class Ipsum extends Component {

  actions = [
    ['compre', 'compra'],
    ['construa', 'constroi'],
    ['leia', 'lê'],
    ['aprenda', 'aprende'],
    ['acredite', 'acredita'],
    ['compartilhe', 'compartilha'],
    ['trabalhe', 'trabalha']
  ]

  expressions = [
    [ 'na', 'sua', 'startup' ],
    [ 'no', 'seu', 'mindset' ],
    [ 'nos', 'seus', 'sonhos' ],
    [ 'no', 'meu', 'curso' ],
    [ null, 'em', 'alta performance' ],
  ]

  getParagraphs(quantity) {

    let paragraphs = "";

    for (let j = 0; j < quantity; j++) {

      let paragraph = "";
      let sentences = Math.floor((Math.random() * 20) + 10);

      for (let j = 0; j < sentences; j++) {

        let action = this.actions[Math.floor(Math.random()*this.actions.length)][0].replace(/\b\w/g, l => l.toUpperCase());
        let expression = this.expressions[Math.floor(Math.random()*this.expressions.length)].join(" ");

        paragraph = `${paragraph}${action} ${expression}. `
      }
      
      paragraphs = `${paragraph.replace('  ', ' ')}\n\n${paragraphs}`;
    }

    return paragraphs;
  }

  render() {
    return (
      <div>
        <textarea>{this.getParagraphs(this.props.paragraphs)}</textarea>
      </div>
    )
  }
}

export default Ipsum;
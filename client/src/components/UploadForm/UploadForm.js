import React from 'react';
import axios from 'axios';
import { TabContent, TabPane, Nav, NavItem, NavLink,  Row, Col } from 'reactstrap';
import classnames from 'classnames';


class UploadForm extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            image: null,
            title: '',
            activeTab: '1'
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab });
        }
      }

    async onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',this.state.image);
        formData.set('title',this.state.title);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
            
        };
       await axios.post("http://localhost:3006/api/images", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
              console.log(error)
        });
    }
    onChange(e) {
        this.setState({image:e.target.files[0]});
    }

    onTitleChange(event){
    this.setState({title: event.target.value});
  }

    render() {
        return (

            <div className='container '>
            <Nav tabs style={{justifyContent:'center'}}>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Bitcoin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Giftcard
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                      
                  { this.state.activeTab === '1' ? 
                  <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                  <main className="pa4 black-80">
                    <div className="measure">
                      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sell Bitcoin</legend>
                        <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="title">Description</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Leave a note(Optional)"
                  onChange={this.onTitleChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Upload Receipt</label>
                <input type="file" name="image" onChange= {this.onChange} />
                </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onFormSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sell"
              />
            </div>
          </div>
        </main>
      </article>
            : null }
            
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  { this.state.activeTab === '2' ? 
                    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                      <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                          <legend className="f1 fw6 ph0 mh0">Sell Your Giftcard</legend>
                          <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="title">Amount</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="Amount($)"
                    onChange={this.onTitleChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="username">Upload Receipt</label>
                  <input type="file" name="image" onChange= {this.onChange} />
                  </div>
                  <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="username">Upload Card</label>
                  <input type="file" name="card" onChange= {this.onChange} />
                  </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onFormSubmit}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sell"
                />
              </div>
            </div>
          </main>
        </article>
                    : null }
                </Row>
              </TabPane>
            </TabContent>
          </div>
            
        )
    }
}

export default UploadForm;

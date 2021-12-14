import React, { Component } from "react";

export default class Tree extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const depth = this.props.depth || 0;
    const data = this.props.data;
    const name = this.props.name || "root";
    const icon = this.props.icon;
    const expandArrow = this.state.show ? (
      <i className="toggle-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#fff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
        </svg>
      </i>
    ) : (
      <i className="toggle-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#fff"
        >
          <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
        </svg>
      </i>
    );
    const setIcon = (item) => {
      if (item.type === "dir") {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 0 24 24"
            width="18px"
            fill="#fff"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
          </svg>
        );
      }
      let extension = item.name.split(".").reverse()[0];
      switch (extension) {
        case "docx":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 0 24 24"
              width="18px"
              fill="#fff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
            </svg>
          );

        case "xlsx":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 548.291 548.291"
              fill="#fff"
            >
              <g>
                <path
                  d="M486.206,196.121H473.04v-63.525c0-0.396-0.062-0.795-0.109-1.2c-0.021-2.52-0.829-4.997-2.556-6.96L364.657,3.677
                   c-0.033-0.031-0.064-0.042-0.085-0.075c-0.63-0.704-1.364-1.29-2.143-1.796c-0.229-0.154-0.461-0.283-0.702-0.419
                   c-0.672-0.365-1.387-0.672-2.121-0.893c-0.2-0.052-0.379-0.134-0.577-0.186C358.23,0.118,357.401,0,356.562,0H96.757
                   C84.894,0,75.256,9.649,75.256,21.502v174.613H62.092c-16.971,0-30.732,13.756-30.732,30.733v159.812
                   c0,16.961,13.761,30.731,30.732,30.731h13.164V526.79c0,11.854,9.638,21.501,21.501,21.501h354.776
                   c11.853,0,21.501-9.647,21.501-21.501V417.392h13.166c16.966,0,30.729-13.764,30.729-30.731V226.854
                   C516.93,209.872,503.176,196.121,486.206,196.121z M96.757,21.502h249.054v110.006c0,5.94,4.817,10.751,10.751,10.751h94.972
                   v53.861H96.757V21.502z M314.576,314.661c-21.124-7.359-34.908-19.045-34.908-37.544c0-21.698,18.11-38.297,48.116-38.297
                   c14.331,0,24.903,3.014,32.442,6.413l-6.411,23.2c-5.091-2.446-14.146-6.037-26.598-6.037s-18.488,5.662-18.488,12.266
                   c0,8.115,7.171,11.696,23.58,17.921c22.446,8.305,33.013,20,33.013,37.921c0,21.323-16.415,39.435-51.318,39.435
                   c-14.524,0-28.861-3.769-36.031-7.737l5.843-23.77c7.738,3.958,19.627,7.927,31.885,7.927c13.218,0,20.188-5.47,20.188-13.774
                   C335.894,324.667,329.858,320.13,314.576,314.661z M265.917,343.9v24.157h-79.439V240.882h28.877V343.9H265.917z M94.237,368.057
                   H61.411l36.788-64.353l-35.473-62.827h33.021l11.125,23.21c3.774,7.736,6.606,13.954,9.628,21.135h0.367
                   c3.027-8.115,5.477-13.775,8.675-21.135l10.756-23.21h32.827l-35.848,62.066l37.74,65.103h-33.202l-11.515-23.022
                   c-4.709-8.855-7.73-15.465-11.316-22.824h-0.375c-2.645,7.359-5.845,13.969-9.811,22.824L94.237,368.057z M451.534,520.968H96.757
                   V417.392h354.776V520.968z M451.728,368.057l-11.512-23.022c-4.715-8.863-7.733-15.465-11.319-22.825h-0.366
                   c-2.646,7.36-5.858,13.962-9.827,22.825l-10.551,23.022h-32.836l36.788-64.353l-35.471-62.827h33.02l11.139,23.21
                   c3.77,7.736,6.593,13.954,9.618,21.135h0.377c3.013-8.115,5.459-13.775,8.671-21.135l10.752-23.21h32.835l-35.849,62.066
                   l37.733,65.103h-33.202V368.057z"
                />
              </g>
            </svg>
          );

        case "pdf":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              width="18px"
              viewBox="0 0 370.32 370.32"
              fill="#fff"
            >
              <g>
                <path
                  d="M148.879,85.993H95.135c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h53.744
               c8.284,0,15-6.716,15-15C163.879,92.709,157.163,85.993,148.879,85.993z"
                />
                <path
                  d="M148.879,148.327H95.135c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h53.744
               c8.284,0,15-6.716,15-15C163.879,155.043,157.163,148.327,148.879,148.327z"
                />
                <path
                  d="M211.944,253.354v14.608h7.717c9.359,0,9.359-5.599,9.359-7.439c0-1.775,0-7.17-9.359-7.17H211.944z
               "
                />
                <path
                  d="M325.879,225.752h-24.41V73.703c0-3.934-1.56-7.705-4.344-10.484l-58.876-58.88
               C235.465,1.561,231.699,0,227.765,0H50.58C34.527,0,21.469,13.059,21.469,29.112v312.095c0,16.054,13.059,29.113,29.111,29.113
               h221.777c16.052,0,29.111-13.06,29.111-29.113v-30.048h24.41c12.687,0,22.973-10.285,22.973-22.973v-39.462
               C348.852,236.038,338.566,225.752,325.879,225.752z M269.855,337.906H53.082V32.414H207.17V75.99
               c0,10.555,8.554,19.107,19.105,19.107h43.58v130.655h-74.178c-12.688,0-22.973,10.286-22.973,22.973v39.462
               c0,12.688,10.285,22.973,22.973,22.973h74.178V337.906z M238.51,260.523c0,10.441-7.224,16.928-18.85,16.928h-7.717v8.977
               c0,2.316-1.877,4.197-4.195,4.197h-1.097c-2.319,0-4.197-1.881-4.197-4.197v-38.366c0-2.316,1.878-4.197,4.197-4.197h13.009
               C231.287,243.864,238.51,250.246,238.51,260.523z M262.305,290.625H247.21c-2.319,0-4.197-1.881-4.197-4.197v-38.366
               c0-2.316,1.877-4.197,4.197-4.197h15.095c13.148,0,23.845,10.5,23.845,23.409C286.15,280.15,275.454,290.625,262.305,290.625z
                M322.455,249.156c0,2.32-1.878,4.197-4.197,4.197h-17.045v10.053h14.521c2.317,0,4.197,1.875,4.197,4.195v1.099
               c0,2.316-1.88,4.197-4.197,4.197h-14.521v13.53c0,2.316-1.877,4.197-4.196,4.197h-1.096c-2.32,0-4.197-1.881-4.197-4.197v-38.366
               c0-2.316,1.877-4.197,4.197-4.197h22.337c2.319,0,4.197,1.881,4.197,4.197V249.156z"
                />
                <path
                  d="M262.305,253.354h-9.803v27.782h9.803c7.915,0,14.355-6.222,14.355-13.862
               C276.661,259.598,270.221,253.354,262.305,253.354z"
                />
              </g>
            </svg>
          );
      }
    };
    const tree = data.map((item, index) => {
      if (item.children) {
        return (
          <Tree
            key={index}
            name={item.name}
            data={item.children}
            depth={depth + 1}
            icon={setIcon(item)}
          />
        );
      } else {
        return (
          <div
            className="tree__item"
            key={index}
            style={{ paddingLeft: 25 * depth + "px" }}
          >
            {setIcon(item)}
            <i className="item__icon">{item.name}</i>
          </div>
        );
      }
    });
    return (
      <div className='tree'>
        <div
          className="tree__item"
          style={{ paddingLeft: 10 * depth + "px" }}
          onClick={this.toggleShow}
        >
          <span className="item__name">
            {expandArrow}
            <i className='item__icon'>{icon}</i>
            {name}
          </span>
        </div>
        {this.state.show && tree}
      </div>
    );
  }
}
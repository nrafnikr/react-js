import "./App.css";
import React, {Component} from "react";
import Navbar from "./Task/Lifecycle/Navbar";
import NewsComponent from "./Task/Lifecycle/NewsComponent";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
    pageSize = 6;
    apiKey = `482dd35b3b884691a5236331de3391c1`;
    state = {
        progress: 0,
    };
    setProgress = (progress) => {
        this.setState({progress: progress});
    };
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <LoadingBar
                        color="blue"
                        height={3}
                        progress={this.state.progress}
                    />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <NewsComponent
                                    setProgress={this.setProgress}
                                    apiKey={this.apiKey}
                                    key="general"
                                    pageSize={this.pageSize}
                                    country="id"
                                    category="general"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/business"
                            element={
                                <NewsComponent
                                    setProgress={this.setProgress}
                                    apiKey={this.apiKey}
                                    key="business"
                                    pageSize={this.pageSize}
                                    country="id"
                                    category="business"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/entertainment"
                            element={
                                <NewsComponent
                                    setProgress={this.setProgress}
                                    apiKey={this.apiKey}
                                    key="entertainment"
                                    pageSize={this.pageSize}
                                    country="id"
                                    category="entertainment"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/health"
                            element={
                                <NewsComponent
                                    setProgress={this.setProgress}
                                    apiKey={this.apiKey}
                                    key="health"
                                    pageSize={this.pageSize}
                                    country="id"
                                    category="health"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/science"
                            element={
                                <NewsComponent
                                    setProgress={this.setProgress}
                                    apiKey={this.apiKey}
                                    key="science"
                                    pageSize={this.pageSize}
                                    country="id"
                                    category="science"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/sports"
                            element={
                                <NewsComponent
                                    setProgress={this.setProgress}
                                    apiKey={this.apiKey}
                                    key="sports"
                                    pageSize={this.pageSize}
                                    country="id"
                                    category="sports"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/technology"
                            element={
                                <NewsComponent
                                    setProgress={this.setProgress}
                                    apiKey={this.apiKey}
                                    key="technology"
                                    pageSize={this.pageSize}
                                    country="id"
                                    category="technology"
                                />
                            }
                        />
                    </Routes>
                </Router>
            </div>
        );
    }
}
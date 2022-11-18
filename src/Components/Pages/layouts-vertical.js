import React from "react";

const Demo = () => {
  return (
    <div>
      {/* Begin page */}
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="layout-width">
            <div className="navbar-header">
              <div className="d-flex">
                {/* LOGO */}
                <div className="navbar-brand-box horizontal-logo">
                  {/* <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                      <img alt="a" src="assets/images/logo-sm.png" />
                    </span>
                    <span className="logo-lg">
                      <img alt="" src="assets/images/logo-dark.png" />
                    </span> 
                  </a> */}
                  <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                      <img alt="a" src="assets/images/logo-sm.png" />
                    </span>
                    <span className="logo-lg">
                      <img alt="u" src="assets/images/logo-dark.png" />
                    </span>
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                  id="topnav-hamburger-icon"
                >
                  <span className="hamburger-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
                {/* App Search*/}
                <form className="app-search d-none d-md-block">
                  <div
                    className="dropdown-menu dropdown-menu-lg"
                    id="search-dropdown"
                  >
                    <div data-simplebar style={{ maxHeight: 320 }}>
                      {/* item*/}
                      <div className="dropdown-header">
                        <h6 className="text-overflow text-muted mb-0 text-uppercase">
                          Recent Searches
                        </h6>
                      </div>
                      <div className="dropdown-item bg-transparent text-wrap">
                        <a
                          href="/"
                          className="btn btn-soft-secondary btn-sm btn-rounded"
                        >
                          how to setup <i className="mdi mdi-magnify ms-1" />
                        </a>
                        <a
                          href="/"
                          className="btn btn-soft-secondary btn-sm btn-rounded"
                        >
                          buttons <i className="mdi mdi-magnify ms-1" />
                        </a>
                      </div>
                      {/* item*/}
                      <div className="dropdown-header mt-2">
                        <h6 className="text-overflow text-muted mb-1 text-uppercase">
                          Pages
                        </h6>
                      </div>
                      {/* item*/}
                      <a
                        href="/"
                        className="dropdown-item notify-item"
                      >
                        <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2" />
                        <span>Analytics Dashboard</span>
                      </a>
                      {/* item*/}
                      <a
                        href="/"
                        className="dropdown-item notify-item"
                      >
                        <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2" />
                        <span>Help Center</span>
                      </a>
                      {/* item*/}
                      <a
                        href="/"
                        className="dropdown-item notify-item"
                      >
                        <i className="ri-user-settings-line align-middle fs-18 text-muted me-2" />
                        <span>My account settings</span>
                      </a>
                      {/* item*/}
                      <div className="dropdown-header mt-2">
                        <h6 className="text-overflow text-muted mb-2 text-uppercase">
                          Members
                        </h6>
                      </div> 
                      <div className="notification-list">
                        {/* item */}
                        <a
                          href="/"
                          className="dropdown-item notify-item py-2"
                        >
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <h6 className="m-0">Angela Bernier</h6>
                              <span className="fs-11 mb-0 text-muted">
                                Manager
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* item */}
                        <a
                          href="/"
                          className="dropdown-item notify-item py-2"
                        >
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <h6 className="m-0">David Grasso</h6>
                              <span className="fs-11 mb-0 text-muted">
                                Web Designer
                              </span>
                            </div>
                          </div>
                        </a>
                        {/* item */}
                        <a
                          href="/"
                          className="dropdown-item notify-item py-2"
                        >
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <h6 className="m-0">Mike Bunch</h6>
                              <span className="fs-11 mb-0 text-muted">
                                React Developer
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="text-center pt-3 pb-1">
                      <a
                        href="/"
                        className="btn btn-primary btn-sm"
                      >
                        View All Results{" "}
                        <i className="ri-arrow-right-line ms-1" />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="d-flex align-items-center">
                <div className="dropdown d-md-none topbar-head-dropdown header-item">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    id="page-header-search-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-search fs-22" />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown"
                  >
                    <form className="p-3">
                      <div className="form-group m-0">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search ..."
                            aria-label="Recipient's username"
                          />
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="dropdown ms-1 topbar-head-dropdown header-item">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      id="header-lang-img"
                      src="assets/images/flags/us.svg"
                      alt="Header Language"
                      className="rounded"
                    />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a
                      href="/"
                      className="dropdown-item notify-item language py-2"
                      data-lang="en"
                      title="English"
                    >
                      <img
                        src="assets/images/flags/us.svg"
                        alt="user-image"
                        className="me-2 rounded"
                      />
                      <span className="align-middle">English</span>
                    </a>
                    {/* item*/}
                    <a
                      href="/"
                      className="dropdown-item notify-item language"
                      data-lang="sp"
                      title="Spanish"
                    >
                      <img
                        src="assets/images/flags/spain.svg"
                        alt="user-image"
                        className="me-2 rounded"
                        height={18}
                      />
                      <span className="align-middle">Española</span>
                    </a>
                    {/* item*/}
                    <a
                      href="/"
                      className="dropdown-item notify-item language"
                      data-lang="gr"
                      title="German"
                    >
                      <img
                        src="assets/images/flags/germany.svg"
                        alt="user-image"
                        className="me-2 rounded"
                      />
                      <span className="align-middle">Deutsche</span>
                    </a>
                    {/* item*/}
                    <a
                      href="/"
                      className="dropdown-item notify-item language"
                      data-lang="it"
                      title="Italian"
                    >
                      <img
                        src="assets/images/flags/italy.svg"
                        alt="user-image"
                        className="me-2 rounded"
                      />
                      <span className="align-middle">Italiana</span>
                    </a>
                    {/* item*/}
                    <a
                      href="/"
                      className="dropdown-item notify-item language"
                      data-lang="ru"
                      title="Russian"
                    >
                      <img
                        src="assets/images/flags/russia.svg"
                        alt="user-image"
                        className="me-2 rounded"
                      />
                      <span className="align-middle">русский</span>
                    </a>
                    {/* item*/}
                    <a
                      href="/"
                      className="dropdown-item notify-item language"
                      data-lang="ch"
                      title="Chinese"
                    >
                      <img
                        src="assets/images/flags/china.svg"
                        alt="user-image"
                        className="me-2 rounded"
                      />
                      <span className="align-middle">中国人</span>
                    </a>
                    {/* item*/}
                    <a
                      href="/"
                      className="dropdown-item notify-item language"
                      data-lang="fr"
                      title="French"
                    >
                      <img
                        src="assets/images/flags/french.svg"
                        alt="user-image"
                        className="me-2 rounded"
                      />
                      <span className="align-middle">français</span>
                    </a>
                  </div>
                </div>
                <div className="ms-1 header-item d-none d-sm-flex">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
                  >
                    <i className="bx bx-search fs-22" />
                  </button>
                </div>
                <div className="ms-1 header-item d-none d-sm-flex">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
                  >
                    <i className="bx bx-moon fs-22" />
                  </button>
                </div>
                <div className="dropdown topbar-head-dropdown ms-1 header-item">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    id="page-header-notifications-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-bell fs-22" />
                    <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                      3<span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-notifications-dropdown"
                  >
                    <div className="dropdown-head bg-primary bg-pattern rounded-top">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col">
                            <h6 className="m-0 fs-16 fw-semibold text-white">
                              Notifications
                            </h6>
                          </div>
                          <div className="col-auto dropdown-tabs">
                            <span className="badge badge-soft-light fs-13">
                              4 New
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 pt-2">
                        <ul
                          className="nav nav-tabs dropdown-tabs nav-tabs-custom"
                          data-dropdown-tabs="true"
                          id="notificationItemsTab"
                          role="tablist"
                        >
                          <li className="nav-item waves-effect waves-light">
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#"
                              role="tab"
                              aria-selected="true"
                            >
                              All (4)
                            </a>
                          </li>
                          <li className="nav-item waves-effect waves-light">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#"
                              role="tab"
                              aria-selected="false"
                            >
                              Messages
                            </a>
                          </li>
                          <li className="nav-item waves-effect waves-light">
                            <a
                              className="nav-link"
                              data-bs-toggle="tab"
                              href="#"
                              role="tab"
                              aria-selected="false"
                            >
                              Alerts
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-content"
                      id="notificationItemsTabContent"
                    >
                      <div
                        className="tab-pane fade show active py-2 ps-2"
                        id="all-noti-tab"
                        role="tabpanel"
                      >
                        <div
                          data-simplebar
                          style={{ maxHeight: 300 }}
                          className="pe-2"
                        >
                          <div className="text-reset notification-item d-block dropdown-item position-relative">
                            <div className="d-flex">
                              <div className="avatar-xs me-3">
                                <span className="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                  <i className="bx bx-badge-check" />
                                </span>
                              </div>
                              <div className="flex-1">
                                <a href="#" className="stretched-link">
                                  <h6 className="mt-0 mb-2 lh-base">
                                    Your <b>Elite</b> author Graphic
                                    Optimization
                                    <span className="text-secondary">
                                      reward
                                    </span>{" "}
                                    is ready!
                                  </h6>
                                </a>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> Just
                                    30 sec ago
                                  </span>
                                </p>
                              </div>
                              <div className="px-2 fs-15">
                                <div className="form-check notification-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="all-notification-check01"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="all-notification-check01"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-reset notification-item d-block dropdown-item position-relative active">
                            <div className="d-flex">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                className="me-3 rounded-circle avatar-xs"
                                alt="user-pic"
                              />
                              <div className="flex-1">
                                <a href="#" className="stretched-link">
                                  <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                    Angela Bernier
                                  </h6>
                                </a>
                                <div className="fs-13 text-muted">
                                  <p className="mb-1">
                                    Answered to your comment on the cash flow
                                    forecast's graph 🔔.
                                  </p>
                                </div>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> 48
                                    min ago
                                  </span>
                                </p>
                              </div>
                              <div className="px-2 fs-15">
                                <div className="form-check notification-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="all-notification-check02"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="all-notification-check02"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-reset notification-item d-block dropdown-item position-relative">
                            <div className="d-flex">
                              <div className="avatar-xs me-3">
                                <span className="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                  <i className="bx bx-message-square-dots" />
                                </span>
                              </div>
                              <div className="flex-1">
                                <a href="#!" className="stretched-link">
                                  <h6 className="mt-0 mb-2 fs-13 lh-base">
                                    You have received
                                    <b className="text-success">20</b> new
                                    messages in the conversation
                                  </h6>
                                </a>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> 2
                                    hrs ago
                                  </span>
                                </p>
                              </div>
                              <div className="px-2 fs-15">
                                <div className="form-check notification-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="all-notification-check03"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="all-notification-check03"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-reset notification-item d-block dropdown-item position-relative">
                            <div className="d-flex">
                              <img
                                src="assets/images/users/avatar-8.jpg"
                                className="me-3 rounded-circle avatar-xs"
                                alt="user-pic"
                              />
                              <div className="flex-1">
                                <a href="#!" className="stretched-link">
                                  <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                    Maureen Gibson
                                  </h6>
                                </a>
                                <div className="fs-13 text-muted">
                                  <p className="mb-1">
                                    We talked about a project on linkedin.
                                  </p>
                                </div>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> 4
                                    hrs ago
                                  </span>
                                </p>
                              </div>
                              <div className="px-2 fs-15">
                                <div className="form-check notification-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="all-notification-check04"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="all-notification-check04"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="my-3 text-center">
                            <button
                              type="button"
                              className="btn btn-soft-success waves-effect waves-light"
                            >
                              View All Notifications
                              <i className="ri-arrow-right-line align-middle" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade py-2 ps-2"
                        id="messages-tab"
                        role="tabpanel"
                        aria-labelledby="messages-tab"
                      >
                        <div
                          data-simplebar
                          style={{ maxHeight: 300 }}
                          className="pe-2"
                        >
                          <div className="text-reset notification-item d-block dropdown-item">
                            <div className="d-flex">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                className="me-3 rounded-circle avatar-xs"
                                alt="user-pic"
                              />
                              <div className="flex-1">
                                <a href="#!" className="stretched-link">
                                  <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                    James Lemire
                                  </h6>
                                </a>
                                <div className="fs-13 text-muted">
                                  <p className="mb-1">
                                    We talked about a project on linkedin.
                                  </p>
                                </div>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> 30
                                    min ago
                                  </span>
                                </p>
                              </div>
                              <div className="px-2 fs-15">
                                <div className="form-check notification-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="messages-notification-check01"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="messages-notification-check01"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-reset notification-item d-block dropdown-item">
                            <div className="d-flex">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                className="me-3 rounded-circle avatar-xs"
                                alt="user-pic"
                              />
                              <div className="flex-1">
                                <a href="#!" className="stretched-link">
                                  <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                    Angela Bernier
                                  </h6>
                                </a>
                                <div className="fs-13 text-muted">
                                  <p className="mb-1">
                                    Answered to your comment on the cash flow
                                    forecast's graph 🔔.
                                  </p>
                                </div>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> 2
                                    hrs ago
                                  </span>
                                </p>
                              </div>
                              <div className="px-2 fs-15">
                                <div className="form-check notification-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="messages-notification-check02"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="messages-notification-check02"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-reset notification-item d-block dropdown-item">
                            <div className="d-flex">
                              <img
                                src="assets/images/users/avatar-6.jpg"
                                className="me-3 rounded-circle avatar-xs"
                                alt="user-pic"
                              />
                              <div className="flex-1">
                                <a href="#!" className="stretched-link">
                                  <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                    Kenneth Brown
                                  </h6>
                                </a>
                                <div className="fs-13 text-muted">
                                  <p className="mb-1">
                                    Mentionned you in his comment on 📃 invoice
                                    #12501.
                                  </p>
                                </div>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> 10
                                    hrs ago
                                  </span>
                                </p>
                              </div>
                              <div className="px-2 fs-15">
                                <div className="form-check notification-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="messages-notification-check03"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="messages-notification-check03"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-reset notification-item d-block dropdown-item">
                            <div className="d-flex">
                              <img
                                src="assets/images/users/avatar-8.jpg"
                                className="me-3 rounded-circle avatar-xs"
                                alt="user-pic"
                              />
                              <div className="flex-1">
                                <a href="#!" className="stretched-link">
                                  <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                    Maureen Gibson
                                  </h6>
                                </a>
                                <div className="fs-13 text-muted">
                                  <p className="mb-1">
                                    We talked about a project on linkedin.
                                  </p>
                                </div>
                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i className="mdi mdi-clock-outline" /> 3
                                    days ago
                                  </span>
                                </p>
                              </div>
                              <div className="px-2 fs-15">
                                <div className="form-check notification-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="messages-notification-check04"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="messages-notification-check04"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="my-3 text-center">
                            <button
                              type="button"
                              className="btn btn-soft-success waves-effect waves-light"
                            >
                              View All Messages
                              <i className="ri-arrow-right-line align-middle" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade p-4"
                        id="alerts-tab"
                        role="tabpanel"
                        aria-labelledby="alerts-tab"
                      >
                        <div className="w-25 w-sm-50 pt-3 mx-auto">
                          <img
                            src="assets/images/svg/bell.svg"
                            className="img-fluid"
                            alt="user-pic"
                          />
                        </div>
                        <div className="text-center pb-5 mt-2">
                          <h6 className="fs-18 fw-semibold lh-base">
                            Hey! You have no any notifications
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown ms-sm-3 header-item topbar-user">
                  <button
                    type="button"
                    className="btn"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="d-flex align-items-center">
                      <img
                        className="rounded-circle header-profile-user"
                        src="assets/images/users/avatar-1.jpg"
                        alt="Header Avatar"
                      />
                      <span className="text-start ms-xl-2">
                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                          Anna Adame
                        </span>
                        <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                          Founder
                        </span>
                      </span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <h6 className="dropdown-header">Welcome Anna!</h6>
                    <a className="dropdown-item" href="/">
                      <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />
                      <span className="align-middle">Profile</span>
                    </a>
                    <a className="dropdown-item" href="/">
                      <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1" />
                      <span className="align-middle">Messages</span>
                    </a>
                    <a className="dropdown-item" href="/">
                      <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1" />
                      <span className="align-middle">Taskboard</span>
                    </a>
                    <a className="dropdown-item" href="/">
                      <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1" />
                      <span className="align-middle">Help</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/">
                      <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1" />
                      <span className="align-middle">
                        Balance : <b>$5971.67</b>
                      </span>
                    </a>
                    <a
                      className="dropdown-item"
                      href="/"
                    >
                      <span className="badge bg-soft-success text-success mt-1 float-end">
                        New
                      </span>
                      <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1" />
                      <span className="align-middle">Settings</span>
                    </a>
                    <a
                      className="dropdown-item"
                      href="/"
                    >
                      <i className="mdi mdi-lock text-muted fs-16 align-middle me-1" />
                      <span className="align-middle">Lock screen</span>
                    </a>
                    <a className="dropdown-item" href="/">
                      <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />
                      <span className="align-middle" data-key="t-logout">
                        Logout
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* ========== App Menu ========== */}
        <div className="app-menu navbar-menu">
          {/* LOGO */}
          <div className="navbar-brand-box">
            {/* Dark Logo*/}
            <a href="/" className="logo logo-dark">
              <span className="logo-sm">
                <img alt="nm " src="assets/images/logo-sm.png" style={{height: "50px"}} />
              </span>
              <span className="logo-lg">
                <img alt="m" src="assets/images/logo-dark.png" style={{height: "50px"}} />
              </span>
            </a>
            {/* Light Logo*/}
            <a href="/" className="logo logo-light">
              <span className="logo-sm">
                <img alt="m" src="assets/images/logo-sm.png" style={{height: "50px"}} />
              </span>
              <span className="logo-lg">
                <img alt="m" src="assets/images/logo-light.png" style={{height: "50px"}} />
              </span>
            </a>
            <button
              type="button"
              className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
              id="vertical-hover"
            >
              <i className="ri-record-circle-line" />
            </button>
          </div>
          <div id="scrollbar">
            <div className="container-fluid">
              <div id="two-column-menu" />
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item">
                  <div className="position-relative" style={{ margin: 10 }}>
                    <input
                      type="text"
                      className="form-control bg-transparent"
                      placeholder="Search..."
                      autoComplete="off"
                      id="search-options"
                      defaultValue
                    />
                    <span
                      className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                      id="search-close-options"
                    />
                  </div>
                </li>
                <li className="menu-title">
                  <span data-key="t-menu">Menu</span>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu-link"
                    href="#"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarDashboards"
                  >
                    <i className="bx bxs-dashboard" />
                    <span data-key="t-dashboards">Dashboards</span>
                  </a>
                  <div
                    className="collapse menu-dropdown"
                    id="sidebarDashboards"
                  >
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          href="/"
                          className="nav-link"
                          data-key="t-analytics"
                        >
                          Analytics
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/"
                          className="nav-link"
                          data-key="t-crm"
                        >
                          CRM
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-title">
                  <i className="ri-more-fill" />
                  <span data-key="t-pages">Users</span>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu-link"
                    href="#sidebarAuth"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarAuth"
                  >
                    <i className="bx bx-user-circle" />
                    <span data-key="t-authentication">Create Admin</span>
                  </a>
                  <div className="collapse menu-dropdown" id="sidebarAuth">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          href="#sidebarSignIn"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSignIn"
                          data-key="t-signin"
                        >
                          Sign In
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSignIn"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-signin-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-signin-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarSignUp"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSignUp"
                          data-key="t-signup"
                        > 
                          Sign Up
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSignUp"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-signup-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-signup-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarResetPass"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarResetPass"
                          data-key="t-password-reset"
                        >
                          Password Reset
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarResetPass"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-pass-reset-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-pass-reset-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarchangePass"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarchangePass"
                          data-key="t-password-create"
                        >
                          Password Create
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarchangePass"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-pass-change-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-pass-change-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarLogout"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarLogout"
                          data-key="t-logout"
                        >
                          Logout
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarLogout"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-logout-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-logout-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarSuccessMsg"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSuccessMsg"
                          data-key="t-success-message"
                        >
                          Success Message
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSuccessMsg"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-success-msg-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-success-msg-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarTwoStep"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarTwoStep"
                          data-key="t-two-step-verification"
                        >
                          Two Step Verification
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarTwoStep"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-twostep-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-twostep-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarTwoStep"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarTwoStep"
                          data-key="t-two-step-verification"
                        >
                          Give Access
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarTwoStep"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-twostep-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-twostep-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarErrors"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarErrors"
                          data-key="t-errors"
                        >
                          Errors
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarErrors"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-404-basic.html"
                                className="nav-link"
                                data-key="t-404-basic"
                              >
                                404 Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-404-cover.html"
                                className="nav-link"
                                data-key="t-404-cover"
                              >
                                404 Cover
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-404-alt.html"
                                className="nav-link"
                                data-key="t-404-alt"
                              >
                                404 Alt
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-500.html"
                                className="nav-link"
                                data-key="t-500"
                              >
                                500
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-offline.html"
                                className="nav-link"
                                data-key="t-offline-page"
                              >
                                Offline Page
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu-link"
                    href="#sidebarVendor"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarAuth"
                  >
                    <i className="bx bx-user-circle" />
                    <span data-key="t-authentication">Create Vendor</span>
                  </a>
                  <div className="collapse menu-dropdown" id="sidebarVendor">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          href="#sidebarSignIn"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSignIn"
                          data-key="t-signin"
                        >
                          Sign In
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSignIn"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-signin-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-signin-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarSignUp"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSignUp"
                          data-key="t-signup"
                        >
                          Sign Up
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSignUp"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-signup-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-signup-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarResetPass"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarResetPass"
                          data-key="t-password-reset"
                        >
                          Password Reset
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarResetPass"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-pass-reset-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-pass-reset-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarchangePass"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarchangePass"
                          data-key="t-password-create"
                        >
                          Password Create
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarchangePass"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-pass-change-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-pass-change-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarLogout"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarLogout"
                          data-key="t-logout"
                        >
                          Logout
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarLogout"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-logout-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-logout-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarSuccessMsg"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSuccessMsg"
                          data-key="t-success-message"
                        >
                          Success Message
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSuccessMsg"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-success-msg-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-success-msg-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarTwoStep"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarTwoStep"
                          data-key="t-two-step-verification"
                        >
                          Two Step Verification
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarTwoStep"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-twostep-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-twostep-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarErrors"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarErrors"
                          data-key="t-errors"
                        >
                          Errors
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarErrors"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-404-basic.html"
                                className="nav-link"
                                data-key="t-404-basic"
                              >
                                404 Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-404-cover.html"
                                className="nav-link"
                                data-key="t-404-cover"
                              >
                                404 Cover
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-404-alt.html"
                                className="nav-link"
                                data-key="t-404-alt"
                              >
                                404 Alt
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-500.html"
                                className="nav-link"
                                data-key="t-500"
                              >
                                500
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-offline.html"
                                className="nav-link"
                                data-key="t-offline-page"
                              >
                                Offline Page
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu-link"
                    href="#sidebarHospital"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarAuth"
                  >
                    <i className="bx bx-user-circle" />
                    <span data-key="t-authentication">Create Hospital</span>
                  </a>
                  <div className="collapse menu-dropdown" id="sidebarHospital">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          href="#sidebarSignIn"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSignIn"
                          data-key="t-signin"
                        >
                          Sign In
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSignIn"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-signin-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-signin-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarSignUp"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSignUp"
                          data-key="t-signup"
                        >
                          Sign Up
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSignUp"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-signup-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-signup-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarResetPass"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarResetPass"
                          data-key="t-password-reset"
                        >
                          Password Reset
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarResetPass"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-pass-reset-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-pass-reset-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarchangePass"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarchangePass"
                          data-key="t-password-create"
                        >
                          Password Create
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarchangePass"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-pass-change-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-pass-change-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarLogout"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarLogout"
                          data-key="t-logout"
                        >
                          Logout
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarLogout"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-logout-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-logout-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarSuccessMsg"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSuccessMsg"
                          data-key="t-success-message"
                        >
                          Success Message
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSuccessMsg"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-success-msg-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-success-msg-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarTwoStep"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarTwoStep"
                          data-key="t-two-step-verification"
                        >
                          Two Step Verification
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarTwoStep"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-twostep-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-twostep-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarErrors"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarErrors"
                          data-key="t-errors"
                        >
                          Errors
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarErrors"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-404-basic.html"
                                className="nav-link"
                                data-key="t-404-basic"
                              >
                                404 Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-404-cover.html"
                                className="nav-link"
                                data-key="t-404-cover"
                              >
                                404 Cover
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-404-alt.html"
                                className="nav-link"
                                data-key="t-404-alt"
                              >
                                404 Alt
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-500.html"
                                className="nav-link"
                                data-key="t-500"
                              >
                                500
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-offline.html"
                                className="nav-link"
                                data-key="t-offline-page"
                              >
                                Offline Page
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu-link"
                    href="#sidebarClaimaint"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarAuth"
                  >
                    <i className="bx bx-user-circle" />
                    <span data-key="t-authentication">Create Claimaint</span>
                  </a>
                  <div className="collapse menu-dropdown" id="sidebarClaimaint">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          href="#sidebarSignIn"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSignIn"
                          data-key="t-signin"
                        >
                          Sign In
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSignIn"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-signin-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-signin-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarSignUp"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSignUp"
                          data-key="t-signup"
                        >
                          Sign Up
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSignUp"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-signup-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-signup-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarResetPass"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarResetPass"
                          data-key="t-password-reset"
                        >
                          Password Reset
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarResetPass"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-pass-reset-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-pass-reset-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarchangePass"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarchangePass"
                          data-key="t-password-create"
                        >
                          Password Create
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarchangePass"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-pass-change-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-pass-change-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarLogout"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarLogout"
                          data-key="t-logout"
                        >
                          Logout
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarLogout"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-logout-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-logout-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarSuccessMsg"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarSuccessMsg"
                          data-key="t-success-message"
                        >
                          Success Message
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarSuccessMsg"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-success-msg-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-success-msg-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarTwoStep"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarTwoStep"
                          data-key="t-two-step-verification"
                        >
                          Two Step Verification
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarTwoStep"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-twostep-basic.html"
                                className="nav-link"
                                data-key="t-basic"
                              >
                                Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-twostep-cover.html"
                                className="nav-link"
                                data-key="t-cover"
                              >
                                Cover
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#sidebarErrors"
                          className="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarErrors"
                          data-key="t-errors"
                        >
                          Errors
                        </a>
                        <div
                          className="collapse menu-dropdown"
                          id="sidebarErrors"
                        >
                          <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                              <a
                                href="auth-404-basic.html"
                                className="nav-link"
                                data-key="t-404-basic"
                              >
                                404 Basic
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-404-cover.html"
                                className="nav-link"
                                data-key="t-404-cover"
                              >
                                404 Cover
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-404-alt.html"
                                className="nav-link"
                                data-key="t-404-alt"
                              >
                                404 Alt
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-500.html"
                                className="nav-link"
                                data-key="t-500"
                              >
                                500
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="auth-offline.html"
                                className="nav-link"
                                data-key="t-offline-page"
                              >
                                Offline Page
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li class="menu-title"><i class="ri-more-fill"></i> <span data-key="t-components">Components</span></li>

                  <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarUI">
                          <i class="bx bx-palette"></i> <span data-key="t-base-ui">Base UI</span>
                      </a>
                      <div class="collapse menu-dropdown mega-dropdown-menu" id="sidebarUI">
                          <div class="row">
                              <div class="col-lg-4">
                                  <ul class="nav nav-sm flex-column">
                                      <li class="nav-item">
                                          <a href="ui-alerts.html" class="nav-link" data-key="t-alerts">Alerts</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-badges.html" class="nav-link" data-key="t-badges">Badges</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-buttons.html" class="nav-link" data-key="t-buttons">Buttons</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-colors.html" class="nav-link" data-key="t-colors">Colors</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-cards.html" class="nav-link" data-key="t-cards">Cards</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-carousel.html" class="nav-link" data-key="t-carousel">Carousel</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-dropdowns.html" class="nav-link" data-key="t-dropdowns">Dropdowns</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-grid.html" class="nav-link" data-key="t-grid">Grid</a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="col-lg-4">
                                  <ul class="nav nav-sm flex-column">
                                      <li class="nav-item">
                                          <a href="ui-images.html" class="nav-link" data-key="t-images">Images</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-tabs.html" class="nav-link" data-key="t-tabs">Tabs</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-accordions.html" class="nav-link" data-key="t-accordion-collapse">Accordion & Collapse</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-modals.html" class="nav-link" data-key="t-modals">Modals</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-offcanvas.html" class="nav-link" data-key="t-offcanvas">Offcanvas</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-placeholders.html" class="nav-link" data-key="t-placeholders">Placeholders</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-progress.html" class="nav-link" data-key="t-progress">Progress</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-notifications.html" class="nav-link" data-key="t-notifications">Notifications</a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="col-lg-4">
                                  <ul class="nav nav-sm flex-column">
                                      <li class="nav-item">
                                          <a href="ui-media.html" class="nav-link" data-key="t-media-object">Media object</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-embed-video.html" class="nav-link" data-key="t-embed-video">Embed Video</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-typography.html" class="nav-link" data-key="t-typography">Typography</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-lists.html" class="nav-link" data-key="t-lists">Lists</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-general.html" class="nav-link" data-key="t-general">General</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-ribbons.html" class="nav-link" data-key="t-ribbons">Ribbons</a>
                                      </li>
                                      <li class="nav-item">
                                          <a href="ui-utilities.html" class="nav-link" data-key="t-utilities">Utilities</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarAdvanceUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAdvanceUI">
                          <i class="bx bx-briefcase-alt"></i> <span data-key="t-advance-ui">Advance UI</span>
                          <span class="badge badge-pill bg-success" data-key="t-new">New</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarAdvanceUI">
                          <ul class="nav nav-sm flex-column">
                              <li class="nav-item">
                                  <a href="advance-ui-sweetalerts.html" class="nav-link" data-key="t-sweet-alerts">Sweet Alerts</a>
                              </li>
                              <li class="nav-item">
                                  <a href="advance-ui-nestable.html" class="nav-link" data-key="t-nestable-list">Nestable List</a>
                              </li>
                              <li class="nav-item">
                                  <a href="advance-ui-scrollbar.html" class="nav-link" data-key="t-scrollbar">Scrollbar</a>
                              </li>
                              <li class="nav-item">
                                  <a href="advance-ui-animation.html" class="nav-link" data-key="t-animation">Animation</a>
                              </li>
                              <li class="nav-item">
                                  <a href="advance-ui-tour.html" class="nav-link" data-key="t-tour">Tour</a>
                              </li>
                              <li class="nav-item">
                                  <a href="advance-ui-swiper.html" class="nav-link" data-key="t-swiper-slider">Swiper Slider</a>
                              </li>
                              <li class="nav-item">
                                  <a href="advance-ui-ratings.html" class="nav-link" data-key="t-ratings">Ratings</a>
                              </li>
                              <li class="nav-item">
                                  <a href="advance-ui-highlight.html" class="nav-link" data-key="t-highlight">Highlight</a>
                              </li>
                              <li class="nav-item">
                                  <a href="advance-ui-scrollspy.html" class="nav-link" data-key="t-scrollSpy">ScrollSpy</a>
                              </li>
                          </ul>
                      </div>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link menu-link" href="widgets.html">
                          <i class="bx bx-aperture"></i> <span data-key="t-widgets">Widgets</span>
                      </a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarForms" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarForms">
                          <i class="bx bx-receipt"></i> <span data-key="t-forms">Forms</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarForms">
                          <ul class="nav nav-sm flex-column">
                              <li class="nav-item">
                                  <a href="forms-elements.html" class="nav-link" data-key="t-basic-elements">Basic Elements</a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-select.html" class="nav-link" data-key="t-form-select"> Form Select </a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-checkboxs-radios.html" class="nav-link" data-key="t-checkboxs-radios">Checkboxs & Radios</a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-pickers.html" class="nav-link" data-key="t-pickers"> Pickers </a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-masks.html" class="nav-link" data-key="t-input-masks">Input Masks</a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-advanced.html" class="nav-link" data-key="t-advanced">Advanced</a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-range-sliders.html" class="nav-link" data-key="t-range-slider"> Range Slider </a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-validation.html" class="nav-link" data-key="t-validation">Validation</a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-wizard.html" class="nav-link" data-key="t-wizard">Wizard</a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-editors.html" class="nav-link" data-key="t-editors">Editors</a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-file-uploads.html" class="nav-link" data-key="t-file-uploads">File Uploads</a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-layouts.html" class="nav-link" data-key="t-form-layouts">Form Layouts</a>
                              </li>
                              <li class="nav-item">
                                  <a href="forms-select2.html" class="nav-link" data-key="t-select2">Select2</a>
                              </li>
                          </ul>
                      </div>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarTables" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTables">
                          <i class="bx bx-table"></i> <span data-key="t-tables">Tables</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarTables">
                          <ul class="nav nav-sm flex-column">
                              <li class="nav-item">
                                  <a href="tables-basic.html" class="nav-link" data-key="t-basic-tables">Basic Tables</a>
                              </li>
                              <li class="nav-item">
                                  <a href="tables-gridjs.html" class="nav-link" data-key="t-grid-js">Grid Js</a>
                              </li>
                              <li class="nav-item">
                                  <a href="tables-listjs.html" class="nav-link" data-key="t-list-js">List Js</a>
                              </li>
                              <li class="nav-item">
                                  <a href="tables-datatables.html" class="nav-link" data-key="t-datatables">Datatables</a>
                              </li>
                          </ul>
                      </div>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarCharts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCharts">
                          <i class="bx bx-doughnut-chart"></i> <span data-key="t-charts">Charts</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarCharts">
                          <ul class="nav nav-sm flex-column">
                              <li class="nav-item">
                                  <a href="#sidebarApexcharts" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApexcharts" data-key="t-apexcharts"> Apexcharts
                                  </a>
                                  <div class="collapse menu-dropdown" id="sidebarApexcharts">
                                      <ul class="nav nav-sm flex-column">
                                          <li class="nav-item">
                                              <a href="charts-apex-line.html" class="nav-link" data-key="t-line"> Line </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-area.html" class="nav-link" data-key="t-area"> Area </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-column.html" class="nav-link" data-key="t-column"> Column </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-bar.html" class="nav-link" data-key="t-bar"> Bar </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-mixed.html" class="nav-link" data-key="t-mixed"> Mixed </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-timeline.html" class="nav-link" data-key="t-timeline"> Timeline </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-candlestick.html" class="nav-link" data-key="t-candlstick"> Candlstick </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-boxplot.html" class="nav-link" data-key="t-boxplot"> Boxplot </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-bubble.html" class="nav-link" data-key="t-bubble"> Bubble </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-scatter.html" class="nav-link" data-key="t-scatter"> Scatter </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-heatmap.html" class="nav-link" data-key="t-heatmap"> Heatmap </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-treemap.html" class="nav-link" data-key="t-treemap"> Treemap </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-pie.html" class="nav-link" data-key="t-pie"> Pie </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-radialbar.html" class="nav-link" data-key="t-radialbar"> Radialbar </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-radar.html" class="nav-link" data-key="t-radar"> Radar </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="charts-apex-polar.html" class="nav-link" data-key="t-polar-area"> Polar Area </a>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                              <li class="nav-item">
                                  <a href="charts-chartjs.html" class="nav-link" data-key="t-chartjs"> Chartjs </a>
                              </li>
                              <li class="nav-item">
                                  <a href="charts-echarts.html" class="nav-link" data-key="t-echarts"> Echarts </a>
                              </li>
                          </ul>
                      </div>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarIcons" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarIcons">
                          <i class="bx bx-tone"></i> <span data-key="t-icons">Icons</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarIcons">
                          <ul class="nav nav-sm flex-column">
                              <li class="nav-item">
                                  <a href="icons-remix.html" class="nav-link" data-key="t-remix">Remix</a>
                              </li>
                              <li class="nav-item">
                                  <a href="icons-boxicons.html" class="nav-link" data-key="t-boxicons">Boxicons</a>
                              </li>
                              <li class="nav-item">
                                  <a href="icons-materialdesign.html" class="nav-link" data-key="t-material-design">Material Design</a>
                              </li>
                              <li class="nav-item">
                                  <a href="icons-lineawesome.html" class="nav-link" data-key="t-line-awesome">Line Awesome</a>
                              </li>
                              <li class="nav-item">
                                  <a href="icons-feather.html" class="nav-link" data-key="t-feather">Feather</a>
                              </li>
                              <li class="nav-item">
                                  <a href="icons-crypto.html" class="nav-link"> <span data-key="t-crypto-svg">Crypto SVG</span> <span class="badge badge-pill bg-danger" data-key="t-new">New</span></a>
                              </li>
                          </ul>
                      </div>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarMaps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMaps">
                          <i class="bx bx-map-alt"></i> <span data-key="t-maps">Maps</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarMaps">
                          <ul class="nav nav-sm flex-column">
                              <li class="nav-item">
                                  <a href="maps-google.html" class="nav-link" data-key="t-google">
                                      Google
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="maps-vector.html" class="nav-link" data-key="t-vector">
                                      Vector
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="maps-leaflet.html" class="nav-link" data-key="t-leaflet">
                                      Leaflet
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link menu-link" href="#sidebarMultilevel" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMultilevel">
                          <i class="bx bx-sitemap"></i> <span data-key="t-multi-level">Multi Level</span>
                      </a>
                      <div class="collapse menu-dropdown" id="sidebarMultilevel">
                          <ul class="nav nav-sm flex-column">
                              <li class="nav-item">
                                  <a href="#" class="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
                              </li>
                              <li class="nav-item">
                                  <a href="#sidebarAccount" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAccount" data-key="t-level-1.2"> Level 1.2
                                  </a>
                                  <div class="collapse menu-dropdown" id="sidebarAccount">
                                      <ul class="nav nav-sm flex-column">
                                          <li class="nav-item">
                                              <a href="#" class="nav-link" data-key="t-level-2.1"> Level 2.1 </a>
                                          </li>
                                          <li class="nav-item">
                                              <a href="#sidebarCrm" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCrm" data-key="t-level-2.2"> Level 2.2
                                              </a>
                                              <div class="collapse menu-dropdown" id="sidebarCrm">
                                                  <ul class="nav nav-sm flex-column">
                                                      <li class="nav-item">
                                                          <a href="#" class="nav-link" data-key="t-level-3.1"> Level 3.1 </a>
                                                      </li>
                                                      <li class="nav-item">
                                                          <a href="#" class="nav-link" data-key="t-level-3.2"> Level 3.2 </a>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </li> */}
              </ul>
            </div>
            {/* Sidebar */}
          </div>
          <div className="sidebar-background" />
        </div>
        {/* Left Sidebar End */}
        {/* Vertical Overlay*/}
        <div className="vertical-overlay" />
        {/* ============================================================== */}
        {/* Start right Content here */}
        {/* ============================================================== */}
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">ClaimStack</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Layouts</a>
                        </li>
                        <li className="breadcrumb-item active">Super Admin</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-xxl-5">
                  <div className="d-flex flex-column h-100">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card card-animate">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="fw-medium text-muted mb-0">
                                  Users
                                </p>
                                <h2 className="mt-4 ff-secondary fw-semibold">
                                  <span
                                    className="counter-value"
                                    data-target="28.05"
                                  >
                                    0
                                  </span>
                                  k
                                </h2>
                                <p className="mb-0 text-muted">
                                  <span className="badge bg-light text-success mb-0">
                                    <i className="ri-arrow-up-line align-middle" />
                                    16.24 %
                                  </span>
                                  vs. previous month
                                </p>
                              </div>
                              <div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                    <i
                                      data-feather="users"
                                      className="text-info"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card*/}
                      </div>
                      {/* end col*/}
                      <div className="col-md-6">
                        <div className="card card-animate">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="fw-medium text-muted mb-0">
                                  Sessions
                                </p>
                                <h2 className="mt-4 ff-secondary fw-semibold">
                                  <span
                                    className="counter-value"
                                    data-target="97.66"
                                  >
                                    0
                                  </span>
                                  k
                                </h2>
                                <p className="mb-0 text-muted">
                                  <span className="badge bg-light text-danger mb-0">
                                    <i className="ri-arrow-down-line align-middle" />
                                    3.96 %
                                  </span>
                                  vs. previous month
                                </p>
                              </div>
                              <div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                    <i
                                      data-feather="activity"
                                      className="text-info"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card*/}
                      </div>
                      {/* end col*/}
                    </div>
                    {/* end row*/}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card card-animate">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="fw-medium text-muted mb-0">
                                  Avg. Visit Duration
                                </p>
                                <h2 className="mt-4 ff-secondary fw-semibold">
                                  <span
                                    className="counter-value"
                                    data-target={3}
                                  >
                                    0
                                  </span>
                                  m
                                  <span
                                    className="counter-value"
                                    data-target={40}
                                  >
                                    0
                                  </span>
                                  sec
                                </h2>
                                <p className="mb-0 text-muted">
                                  <span className="badge bg-light text-danger mb-0">
                                    <i className="ri-arrow-down-line align-middle" />
                                    0.24 %
                                  </span>
                                  vs. previous month
                                </p>
                              </div>
                              <div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                    <i
                                      data-feather="clock"
                                      className="text-info"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card*/}
                      </div>
                      {/* end col*/}
                      <div className="col-md-6">
                        <div className="card card-animate">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="fw-medium text-muted mb-0">
                                  Bounce Rate
                                </p>
                                <h2 className="mt-4 ff-secondary fw-semibold">
                                  <span
                                    className="counter-value"
                                    data-target="33.48"
                                  >
                                    0
                                  </span>
                                  %
                                </h2>
                                <p className="mb-0 text-muted">
                                  <span className="badge bg-light text-success mb-0">
                                    <i className="ri-arrow-up-line align-middle" />
                                    7.05 %
                                  </span>
                                  vs. previous month
                                </p>
                              </div>
                              <div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                    <i
                                      data-feather="external-link"
                                      className="text-info"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card*/}
                      </div>
                      {/* end col*/}
                    </div>
                    {/* end row*/}
                  </div>
                </div>
                {/* end col*/}
              </div>
              {/* end row*/}
            </div>
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">© ClaimStack.</div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Design &amp; Develop by GreeenLava
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* end main content*/}
      </div>
    </div>
  );
};

export default Demo;

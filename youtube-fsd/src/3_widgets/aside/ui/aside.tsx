import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { _ } from "./asideStyle";
import { useSubscribeList } from "../api/useSubscribeList";
import { buttonData } from "../lib/buttonData";

/*
    [고민]
    svg를 쓰기위해서 assets에 svg파일을 저장하기를 원치않기에
    google icons에서 svg 속성을 가지고와서, 버튼 정보와 함께 obj타입으로 만들었다
    또한 로그인 여부에 따라 aside의 버튼 하나정도가 바뀐다. 해당부분은 추가할지 말지 좀다 고려중

*/
export const Aside = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onClickRoute = (path: string) => navigate(path);
  const [subscribeList] = useSubscribeList();
  const [cookie] = useCookies(["accessToken"]);

  return (
    <_.aside>
      {buttonData.map((value, idx) => {
        return (
          <_.category
            key={idx}
            $currentpath={location.pathname === value.router}
            onClick={() => onClickRoute(value.router)}
          >
            <svg
              width={value.src.width}
              height={value.src.height}
              fill={value.src.fill}
              viewBox={value.src.viewBox}
            >
              <path d={value.src.d}></path>
            </svg>
            <_.category_name>{value.name}</_.category_name>
          </_.category>
        );
      })}
      {cookie.accessToken &&
        subscribeList?.map((value) => {
          return (
              <_.subscribeList key={value.idx}>
                <img
                  src={
                    value.profileImg
                      ? `${process.env.REACT_APP_API_URL}/${value.profileImg}`
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABU1BMVEXs9P////8AAAD/y75SR5hFPYHd6vv/0GTqrJ3/wlDfk4Du9v/y+v//0sX0/P/w+P9jT0r1yGAcFwvwtqf/x1LV3ObwsKHzwrVEPYDj8P9IP4ZpbHGkfTOXb2VxWlVVSp7q6urg6PL1u009NXL/1meurq7Mh3V6WVHQ0NBnZ2dAQEC6urpPRJIcHByEhIQpKSmcnJyyuMD/zaOQkJBzd3xKSkq0tLTg4ODTm401NTXU1NQvMTNERkpWVlahpq7HztfVqp+wgnZGMy8LChVgYGCUmaBPU1lbQz25v8ixjYQ1LmJ+hY8dGTYPDh2ob2AtKFUjH0FFNBbZsVUsJBGAaDJtWSsmHBqkeW7Dj4OQamBLPDiohn0dFxaBZ2A1JyNjQTnapkSZdDDDlD00JxB7ZDDIo09aSiOniEHiuVnUqojesaaGWE2xdWaNXVEoIknSinhUNzAjC+iVAAAYxklEQVR4nM2d6UPbSLLAhcEOiWyJTGIwZgL2Ol4wYGy/mOXGhCucC5lkEgKE2Xk7yc7LZPL2//+03VKfUnerWwfZ+jATwJb0U1VXVVdf1lDmUltfaHaXWstrnXbOl3Znbbm11G0urNeyv72V4bVr682l1lpOLWutpWamoFkRzjVb8xFsrMy3mnMZPUkWhOtdEzgqy90sKNMmrDVbseiwtJppW2yqhCvdrUR4vmx1V9J8qPQIa91l9ZNvbB5OTfX7/ampw80N9UeXu+lpMi3CBZn2Ooen271B3S0Gxa0Petunhx2ZJhdSerJUCGsv2oJnbB+eAjTHcYqua9tWUGzbdYvgrwBUzNl+kYoiUyCcE/iWTn+7DOAAWogsROq6ALO83RdQtlJwrokJ58Kt73C7bAHFRcOxmEXHKm8fhq41n5gxIeFC0GW0+0e2UxQYpQalXXTso37Q4NcSNshEhAuByN6eOrIcI92FdelYIcj5RIwJCIP2edirJ8MjkPWjff7SywlsNTZhLfAQp+ViMTkehizWD/jL78f2q3EJX3D33+y5Tlp4CNJxe5vcPV7cK+EC59n3j9JTH8NYdHlj7cRrjnEIeQPdLxfdBBy2wu+6xQF/qzimGoOwyd50a+DE5YMx0PuuKw+erjPgYmTzHghrbAJ6GJ/PhRG+v7XW6Wwc9g9Adie5EGBkfba5Gk0J/8bcrd1zY/IBrQ1OufpGpy99Wa7bYwPk37Il7DO3OrBi+RdonINTQRK6OZD4Y7tosbGjnyHhCvNch/VY8QEa54GoJwJlql6UvBWnzDSOjlEP2YSQtdDtOA4UBIDygaqG0z5yZG+muB3TUg0IlzRethLPUeP5b06GaBXrU/RjS1kQMh6tZ2ygnvZEpYs3r1//k/vFgfTattOjH1tOnXCFtp3NuvQ9y/CK5QM+BfPk9Y//ePgUyj9+fE1/eyr3X06dXqWt2xg1CeeYl2wbtUBonIKeLcR7+vQhEgD5mfylL0d0bcapavY39AgX6HWPTCwU4NVFeG9+Bdp7yMrTp/9L/jolv4XtHNGr6OWpWoRdctF5AxcDjLPeE+M95fF8xr+QBnmoCLTFOvVW3bQIaU+pb+laKOzH9gJdSM843/70/PkDASBEJK1x31Kk4xZNO3R6VBqENEocaCYxHt5ULiQ/vP3pwfMHnkQgHioQ7SJtjBpRI5qQAmoGiVDHDgnEQ3wSxIcPCeK8wlrYsBGNGElIAG8HWkECJJHbuZC8efvpOYMnRyQuda2uaBDO4FYbMYqQAHbKWj7GtbdDWeeb3z49COBBETbGhz9rIRbLHV3ECELiZNqq+zEvtxyK7L99ehymkyM+ZRAVjaJYJy8ywt2oCUmY2NAC5PIqT37+9ECCJ0d8i798qGoWboEkgeqgoSQkgX5TD7B4aoAnR/wVX+BAhWgXiLkoQ7+KkKRqyibBAPY5vMeCtmeIqLJTa5JqUZXAKQhXTNsgA/gvHTw54o/oMqdK910okLaoSMMVhPjrHU1AGoffRlknK6q2eKtSoj1ZIB61HYcQ9wfbZS3AIkmJ3/xkwCdBfIhy1J7y3oXJwR66qby/KCUkgXCgFQftOv78Z1lwMEHEdtpX3RwocZK8V2lYlBGSmkxPr7vr4DT0syGeTIv+1TbUI5GFwiRJoGS1Gwkh8TJKh03FHaDPv44BKHI3T1H6psjALehOC5Ok+Uu8jYQQt2BFf5snxP1AYxOVKBFHDGW8gEosTGLr6ZgQYr8/r36FYRV+igUoUCJuiGX1AwAlFgq4SywuFQsJSSPUixPAkaLpGD/HAxQoUZMQKrFQVjZFEWENf+NIs2RBHOnv34WQOlTRsI2IEHdfNb0MUCFyaJ/jAobNVJfQM9NJnA/v6xHi8cFl7Tkjzn6iVihSoi6hp8QCScIF44thQmKjuo0QEKJvxAeMTWh7SqRNMWynYUJso5qhHt4FXf+370CIlEgCf9hOQ4S4TzilX7p3Ub/3X9+PsDCJFRPqK4YIcY8iItSygh2NYcadEqFvpsROQ3E/SIgLM9sGw2cOcmWP4wMmIMRKxHYaLNsECLGbOTQZH8Rd3+9KWJjEiWNNSYitWd+PWrRf8Z0IkZkSO91XEeLKjHas/28gJErEcX9OQYj69W3NhPu/i5CUbZblhDhS9MxG6b8zoY0BibNZkBKibsih4SzR763DSaJElLzNywixCgeGE0kI4fMHjxnho+NjtfyFl6cmhMRMSSdjQUKICqzKYrqK8NPbz29+IPLmLcV7/tPnH0zknz//+Ks+ITFTEjHWxITYkZqqkFahAkL7w7+LP6AhWjqkZoprDXNCQtQK901VKCXM/Y5V+Nt9EWIlLosIsQr1CsBahP/3P0heZUtI4wVR4rqAEJVa9s3nc0kJJ4Z9KT27N0KsxFaYEGekR+Yz8mSENyVEODxxK/5EBoTYndZChKhTsRljyiFDeD1GZHqHAAK5GdOTV1Cu3xkSTjKIKCa+CBGijMcwneEJX30pMTLMSklTnoxDGX0fnxAlNu0gIY72cRa9YMK74eTyZNST8ZdGhIyZFgromwsBQjQF94VxqGAId0rRBJqEo+N3cQlxF2OLJ6yZvTIx4UQ0gD7hh9g6xP3EGkeIJl0Yde2zJXxmQmizhDhgNDlClM+oh1zDF7ZduAA2U0IX3UT9JJMsIfI1yywhGi5sGxTY4ORKq3x0NKhbQ1kS4puol66whKQnvMIQIiPt6/sZm84+7JxuZUd4gK69djpQrg7gzBQ9WJchRJfRz2dc6yC8JiQLQka2ZCtOQoQ91ptajCfVL884A9G8+4wJgY3Jo3VBZKY1Qtg0NNKiYH7lfRAqJmdxgNhMm4SwZWakEsB7IMxtSHyhzRMiM20RQvR1zfFCMmj/HQhzW2JD5QlJ5oYJUd9Xsz5jF+kU2enj45vrrAln37//cEd+Eg+oBAhx0J9DhF3Vd0NCbfRmwusO7ODOXyaEY6Neb+MKlwnE7jBIiCbZdBEhSmg0U0AHudF3X1CiXZq4y47wwzj6mSAL8y6bD/m4mLGMCP2fOnqxgrTCL6QnUZqWEep2NujngoSriBD8Ztb/jbhSFiAsdEhDtEgz1IwVeMD3GX0qCWFpeOf4eCIasjRxfLyDIUOEo1TQq9UhxPFiziNsGjVDPBz6hXlEIWFpx6tF3EQS3ng2jzqXCsLxMf9XwoARJETOoukRomioWUVEHYlbBkdIWNpBr/yjWoulj+hzPqKKUNVlDFopakstj9B3NB3NfoUu4TBx8DtKQvwicrlUCVFDnIeEKCnVHa3AQ9pRVkqfXKlEokL0JlSEswaEOCLWAOG6/0/1pHEqeFkVoxkRYemYPPm1knCafO64JCBkHM04ColCfxEiRIpYB4TI0eh2711Ucr2J8KWUcCwO4eiq/3bGGUL/Y22taEFdjYUndOuOOOEJUNdqHQ5P8E8uJaRvwvs6IRy/AqnSLqtCVGAUR7VQO0SKWAKEyJVqFzBwTkMbotiX4gZ2q+CDsos+95HzNIBo9Gp1nCVERiqsWQdzmgJOvluA0N+eoqNdwMBLfz5G5TT+b+++DKsF5XzT/k9PWKZRVlZzClUE+xaFguU70zVA6H9Pf+DXxfVIAiTLaXamd8eOI/ig3IztkkGOJ6MSIUmbTt+iQMcvhiwULHRdKRAHfXcaK1Gal4ZGL8TCfkxGOI5VKO6mCwiRM61ZKCs1mMeGM1PSEuWZt7lICVHKtibpH4QJUVRbt9CQjEEt2LbQzjLYnd4D4fhVTq2JMCEKFwsWCocm0xOKWIkoJt6HDtEdO7JKS4gQh4um1VV4KJkSXbzqy+8j4sCQHSGOFPLVA2FC5BC7Fgr4RuOGpBf8biJDQjhSiv6Fcm65xw+HQxwQlywU8A1nsuFFNV5TLN1kQvjy/ZWPSIZL5YUWAeGk/5WWtRyH0HZxzXtsmGZe6m6SnhC+Vdh/nh3nAOXb88gJt5Bf3DAcOKQ101eUUJmAGhKilvdynAGckj5kOBwCQl8J8yi52TQdGqU1xd0J3J2/SZPQv+QsrbHlNhSlMhGhn5h0LL+8u2U8+OvQlenHJf//08kJJzAgSmFmR+l0KlWZRUTo94HbFmqPiWZC4bJ3ckLSAUamuUvuoV6tKyJEc9atKBOXiu2GpkIld6aEcDZ4bSWgKFjggmJ8Qsu2+4GnSO5qSDPcDVxavd5ag1C5ZlqK6AQ2ipU1RFkXI/x7Eiv4C29EbKwiAExDh0CcI26rFkl3fuImMMkN8X35OPaRN2xipO85wMjNm7IjtIp1zlLFMd9zRCFEP8a84xAJITshdSN6ezEhIfY0/tBYjFmlvthOmXE4otIozgeCIxhoRuYz9tcCI+1sW5HPJmqGpGKK4mG8yVCeuI7V66Nu/63Am5KS1BeWpTSBZliytUYSDVGm3WkdDJzo9fKijIaJhzFzGu4OruOgFybwpjgvh38kdQ8yqsGpnRgpGnMFeFrdVjEhzmnQqEUSQosmcbthHTIThK+P/XmmwztjxArZUlwg3IvH0bQJ0ciFhSYLJSS0LaKnsBLpEAaA/Pjs4zUzJ/pYpEI0qHOg+VDCZkj7FrH6h2HBaeqdwtcI5EbgZ4gKdesOQkDaP0R9/FinGTBCNh0Q5TVSRA6QdH6RCrWzEDEh6eOjOk2sqbOs4G6/yJ0O0/kanPAxEqsQd5d0F36IjZTWaWLU2oSCR2zEw4Wl4Y9BvNwYHyHxDG8cC7XnoElUSGpt5vVSiZAOo3i6N8jROL5gHkdi4S76gHb1T9IMSb0UDZCarN0Wi12/VdjpsDfnYtrvSV5Ph+doBMtq2gt1JUZKa97m4xYyIYUN6ZAoiIQTUIbDfQ1so7i2LS39hkRipHTcwnjsSS44sYmafiGQiUAjNPALMkIy9oTGD9dSIKT7fRl3hQOBIneq3WgkRlqY9BNuOH7odw0MtsGQCxnQMEXExW3sZXR3b7KkKsTBAo4B+/P0E8dDT2gBzmj9jN8Ix0fJRE6DNZAyQmYcf6jWmp8yX1YpFNsl+1EaaBEDYg1q795kKYyUmYsBJbVjcGyLTOF/pouIAFfJkjyTHR1kKsSudAURpqNBKGSUn8w90AS8It/bN3jfMhVyc6KgJA73RKg/ZebYRgKOk0CfM1rXIlUhN6/NX3aRBaHO1EsfcHU3F4tQqkJ+bmKGhLnrCDXyvQlTQnGBxjPSA+xoMGFqB1IFCNUDUgIFmulQTsjNEU61IYYIc7tSNXrDn4HirwmhXIWBed6+N03h1DuW8I55ZHFrRApkar93hoTyVhicqw/l6Ej72AMtwtlVhvFaMJ/9Sah6/8dfDQnlgMH1Fv50/Xbibj5HOM4NkAUznAlfgXS9Te7d10eGhAoV4mi4Hlidl0byTQlBEJeq8UmoBf7x6JEpoaIVBtc94cX4MTaMUBGCTJNTI1k3MhFqgUCBxoQqFYbWri0YNgABmO0W4eG+jsMQoom+RI07JTxJdpyH/+XRI5ZwyHGKxcjFzQoNhtcfGq8h5ekAnFU/2j6YmqejibNosg9Hknu2MwEVuPqeHT27/fqII8y1N6cOtgd1q6g4cVcwKZiR0BpSvA44hq+BpwENDqZCZ1rMkhlbV+/4v9wGSqdIgQwhBp2ChwbKhp5UKkR9Q2YdsPEyWYpX3t4SnhM3S1dkjYZmHYgUGCb0KPd7ZSGkSoO458Su5Ubr8XXXzfh4rlPflp6jNssuI7iSbk9DFSgmhLK5HV6Mr7RR0Xp8vNmefl3YLtoD2dZCQUKpGu++PtIgBDI1cHlFKlUo2lMBm6nuYDc8LkdwkJqMEMaGMOPd+9FRTUJ4nDIz2K1KSGX7YuDFznpmWnS3xcfan59dfvP/NcYTgviw+oHNVXNjL4FqH4kI986F117rEVtV26h4bxO8rkRnUNIt9kJ8e5cnjerIyMzMzIj/i1cBQg9y9OWHsevd3Vez76/86bFCwouZkZFq4+RsL3iTtSM06K1WoXh/GrKXWWQXw3bKgfO4zy8b1RnI5smir4G7MKEHicX/mSf86l/vBF4JXrDauAxQ7pdhDUcJKN1jCJ8VELVPlGvx51XvfauMYDhfzrzf34oAQ8IT/ulfskIuNTOzWPnGQx7YrtpGpftE4SXr6kkZtjPgzrg9a4xwdPCpUEO8EipRSfiL/80qf73Fxhl7y/lyBKF0ry+8j5Iqr7FdbiLbt+pMkA/Iif/HZ+aEftTcC14QmOs3To0qRMV+bXiVniJgFOvsec4XiwI8IFX/z7sahMJmeCa47MziBXPn/YKcUbHnHjmWRKpEZ8DkZ0B/Qj4gyNmvRiMKjbQhvPBM9ZLevDOQIqr2TcTpt2zvS/bEsfO8lG9kBr3uWUPC/0fXXpRdN8/EyZ5s5Fe19yVeECwe+GGPVfT9uVSQmXKbBeir8FJ67ZmZE/oIksao3r8UJ6ciJdrMxPVzuYH6T4J8nyDoKwhRK5QYKZIGVeOpcF6weg9axSa0LOCFEg8SNtAnX6oReRXuotenunI1n6etUYAYuY8wbombwcSGPTNO+Y55JUY4Gw7wD43LVyv5fJVaqgAxai9oosRgYkM1uBdhoT5hBX363agCUZTO5M5UGgSAALEhRdTYzxtvqx/YyMUh62POJTEwiIgj9K4ckQP8O75BVX5RHxAiksa4HUCM3pOdxERuFJYeo3wm8+RBWcTfkGtRpEGvWxEBCKRCEI+43QR19tUnR1kxEYMu4lKZUECJOGJI3Y0gTojTGQyYZ4QisqEfP6fybATB+RZ2HXcGtTUIEalDmBWpkQ0TpBZ3Lr8BB8ggboQjRcT5FuRsVeJs8ElHqvuLEGkiefthdHxcBvj13+RzObkXY0wUIeI+1RRWou4ZJUNDuHeE6hnUyxgBcoh+yYIKwfvrn2xhwwAwnyceFXsb7XNmSMTY8pwNnVqRNwPkDBXK7uyz9y89+bsnf/7xC1djVLhpASATNMq8jUafFUScDVySatv4i+pUVIzYyOnLpdREFvMCQICIbeSQs1GN855I2Q2eNUNs9Js5IHw4rneukob8GmJAgIgvDu3U6MwusvH1puXiQXkzL0NlphEqmIkVKH2Bi2I8ztsUDM9dG8Kb5uZOyb8U3cEoORFXPxk5U1xd1ASJEnFD7xcNz84bquG+PO4SKlKNSJlZbFzm5LJ3ocp0VYAAEV+YdF11zz+kx1Ujic/nMY4sNr4JrfXsJB+q1TEibYLETgPXE57PLT6HdIn7otwNaEPC+m6lwUl+cUZUqmMAI/i4rpRnrUIWyVmy7KiZIls05yQS9eHFahQfFNZZG50lS495zMWI9WlIpIX6wirR7DxgEjJUpaEMRUuBeSYoGp/pTI8J1ClbpC2aCsyzLdH4XG56jF6SYBiPT1eBQBoJzlanJ1crkv4spFrRVSCT1rTlGApCEviZ8a7MRd9AWUCZl4kgJEXw3F5DUSFKl89EaDFjTkGhIqQOFSDeA6NJA+QAhbmMFiE53hkgAr+VMZ+JfXKAXSWDmpCUbUDQAFlwNWYnSovPUGgbVANGEdKwmDup5iuVjBjNzDMPixgEMFh5MiVkknCAmAkjaH5m9smV9qWRXpuQQbzwXnXKxgqanykf26eIBNQgZAz10r8BHAJKB3LRJLxTwAsDQB1Cxt2c4eepJNfkomFwoEJrBlFtUJeQBg0YGPF9EkFCuhjagwqkUSLKixoQMn2p3AVzt4pHaYq5WI2Nx3frlYHekJCt3JzxDwcbUlUTc3ExER0UZu6QKlUzJxxaoXNpGEslmNDDQk4JqYdWRe8jvrAW2lYk27EIySA/lG/iB6hUfIAqL+gvidh8QMZC5f3B+IRM1Midh9UYYq2kg8VclCk7aUSJGISsv5GpMTvhKoeymkxSwqEV5iyy85O44SwWHzsFs6PbBM0J+VLxWZomqOarsNMvxYXftAg5S81dVO5HjyfsmICJhcYhHKq1mLvtXeQzZ6yesIXtLdHgS7qEATVm3Ryr/BxowfhgBoRk6QLS40l2egzw7RsrMC7h0Bx3wOP5SSbtscrbZ66jl4emQ8j2qPz2mDpjNR8YPdbpKaVJyHucHFyYUE0TkosPcQ00GeHQ0PoW/xDnQJGpQFYrJ4FJHMua/YiUCUFzDKwPyp2dJIYEeMG1QPPxGmAahIBxLReETKBJ8MUQXm4tEV9iQoEeobk2zB1PtVppXIRnGCWxz5QIQXsMbuvtqxJQ6irTowspD0hrPfr290AI/GpXuODy/PLipFFVccI/Vhonl+G1hkDaL2L7T1ZSIQQyty94Rih7kPMEDuz4TP7/IXWjcXIhZoOylbD5EUmLECiyGW6RAdYzIJfwP+cR092Wm6moz5P0CIGsdLfUT64lW12jHm6UpEo4BDXZimZQSCtF7fmSNiGU9W6EvUpkuZs4NAgkC0Io682WdL8Fgcy3mlnQQcmKEEptpbnUCiU9AVlrLTXX07ZMVrIkRFJbX2h2l1pb8502Kpy3O/NbraVucyFTNCT/AXyNSwhXs49+AAAAAElFTkSuQmCC"
                  }
                />
                <span>{value.name}</span>
              </_.subscribeList>
          );
        })}
    </_.aside>
  );
};

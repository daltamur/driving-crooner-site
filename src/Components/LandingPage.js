import croonerCar from './../img/croonerCar.png';
import DrawSVG from "react-svg-drawing";
import { Col, Container, Row } from 'react-bootstrap'

function LandingPage(){
  return(
      <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs={12}>
             <DrawSVG easing={'easeInQuad'} duration={3000} strokeWidth="1.0">
              <svg viewBox="0 0 1258.6667 458.66666" width={'180%'} height={'100%'}>
                <path
                  style={{strokeWidth:8.33333, fill:'#FF3131'}}
                  d="m 503.49155,429.70621 c -5.91217,-5.9122 -6.0104,-23.5861 -0.25608,-46.0772 3.6656,-14.3272 6.21216,-15.8525 4.51561,-2.7048 -1.34169,10.3978 -0.56409,15.9479 2.23442,15.9479 2.39804,0 3.9941,-3.6175 15.88345,-35.99998 5.51953,-15.03333 10.66736,-28.98333 11.43963,-31 0.77225,-2.01666 1.15716,-3.66666 0.85534,-3.66666 -0.30181,0 -5.36933,5.89565 -11.26114,13.10146 -11.50211,14.06728 -13.73274,15.64592 -24.03966,17.01319 -6.46162,0.85716 -6.7389,0.75769 -8.1368,-2.91903 -1.57468,-4.14174 -0.82466,-12.85009 2.10771,-24.4722 1.00977,-4.00212 1.68953,-7.423 1.51057,-7.60194 -0.17894,-0.17896 -2.9287,4.09065 -6.11057,9.48801 -7.1968,12.20787 -16.69695,23.20035 -21.96499,25.4154 -13.28646,5.58653 -16.66837,-13.60631 -7.4873,-42.49172 2.29592,-7.22343 3.89833,-13.40957 3.5609,-13.74699 -0.8856,-0.8856 -14.07872,12.32658 -20.62404,20.65382 -5.48668,6.9804 -9.68754,17.90824 -13.79805,35.89333 -1.817,7.95011 -3.83755,8.79191 -9.81562,4.08956 l -3.70002,-2.91045 0.7645,-14.49183 0.76451,-14.49184 -5.37793,8.40228 c -9.34496,14.60021 -18.23691,22.16073 -23.93595,20.35193 -3.66487,-1.16318 -7.83031,-8.35462 -7.83637,-13.52914 -0.007,-6.02898 3.46034,-21.93346 7.5042,-34.42051 3.91629,-12.09316 16.36042,-39.33333 17.96864,-39.33333 0.5834,0 2.84992,2.6005 5.03672,5.77889 2.18678,3.17839 5.35621,6.69533 7.04316,7.81543 l 3.06717,2.03653 -3.85332,9.18457 c -6.94367,16.55052 -10.10489,25.90822 -10.10489,29.9119 0,4.26201 0.8864,4.75524 4.00818,2.23028 5.49628,-4.4455 9.51712,-11.45546 13.35192,-23.27779 4.58689,-14.14095 12.15071,-31.47475 14.31923,-32.81496 0.74652,-0.46139 3.0674,1.40528 5.15751,4.14813 2.09009,2.74286 5.25055,6.23663 7.0232,7.76394 3.48689,3.00426 3.50237,2.86386 -1.75192,15.88974 l -2.15132,5.33334 3.68827,-4.66667 c 8.17049,-10.33791 18.32442,-20.07008 23.60886,-22.62823 12.24371,-5.92708 20.61544,-1.95192 18.64094,8.85131 -0.5137,2.81064 -3.5502,12.13676 -6.74776,20.72471 -3.19758,8.58796 -5.81378,16.73796 -5.81378,18.11112 0,6.96608 4.97032,4.05269 12.67195,-7.42775 3.29709,-4.91481 6.00763,-8.34243 6.02341,-7.61692 0.0157,0.72549 2.87647,-4.05853 6.3571,-10.63119 9.80598,-18.51722 20.55197,-24.78164 32.18826,-18.76428 3.73432,1.9311 9.87958,8.34703 11.17315,11.6653 0.44719,1.14714 1.78237,0.39004 4.02801,-2.28407 2.16177,-2.57423 3.79113,-3.52475 4.57118,-2.66667 0.66664,0.73334 4.01539,4.39979 7.44164,8.14767 l 6.22956,6.81435 -9.93328,27.18565 c -18.59326,50.88651 -34.39028,87.25761 -41.64123,95.87491 -3.34304,3.973 -10.26735,7.9774 -13.7942,7.9774 -0.79021,0 -2.86143,-1.4246 -4.60268,-3.1659 z m 17.50763,-103.27372 c 8.03633,-6.35234 27.11284,-26.75446 27.11284,-28.99688 0,-2.79998 -7.98882,-8.56348 -11.86988,-8.56348 -6.27011,0 -10.89202,6.95498 -19.5917,29.48132 -2.49613,6.46332 -4.53842,12.07411 -4.53842,12.46842 0,1.77202 2.91177,0.3339 8.88716,-4.38938 z m 132.44617,53.06022 c -30.40934,-5.4015 -46.59078,-27.62819 -46.64696,-64.07396 -0.0435,-28.21996 11.41775,-54.10475 33.91995,-76.60696 21.59429,-21.59428 44.86651,-32.32774 67.18911,-30.98848 11.0094,0.66052 20.899,4.62044 26.4728,10.60012 7.4971,8.04306 11.2649,24.33041 8.5533,36.97417 -4.9106,22.89725 -21.2035,38.85587 -43.9975,43.09487 -14.36028,2.67057 -24.15736,-3.67379 -24.15736,-15.64372 0,-6.83542 7.46202,-16.34428 15.0868,-19.22512 5.24766,-1.98271 5.85416,-1.82987 6.73966,1.69853 0.4303,1.71417 2.0388,4.71417 3.5747,6.66667 5.3484,6.79946 15.9286,3.53208 27.0448,-8.35204 10.9912,-11.75042 12.5341,-20.79244 4.6762,-27.40438 -15.0183,-12.63709 -53.6321,2.85815 -72.29424,29.0108 -18.13918,25.41979 -23.79219,52.25551 -14.5751,69.19032 5.86638,10.77847 14.56039,15.96602 31.04443,18.5236 24.30461,3.77099 54.88111,-6.27856 79.82471,-26.2359 14.8949,-11.91738 18.2822,-16.39238 24.1078,-31.8491 5.8877,-15.62124 10.3189,-24.66666 12.0838,-24.66666 0.6926,0 1.9505,1.35 2.7953,3 0.8447,1.65 3.9191,5.47692 6.8318,8.50426 5.1464,5.34895 5.2402,5.61231 3.3256,9.33334 -2.5813,5.01664 -6.2376,13.82906 -5.7377,13.82906 0.2158,0 3.4343,-4.95 7.1522,-11 7.5699,-12.31824 16.5075,-21.71284 21.9188,-23.03954 4.7406,-1.16227 9.8573,3.81236 11.2017,10.89057 1.9032,10.02033 -8.7164,45.81564 -13.5923,45.81564 -1.0316,0 -1.8756,-0.53511 -1.8756,-1.18913 0,-0.65402 -2.7826,-4.28407 -6.1836,-8.06678 -5.6093,-6.23886 -6.0427,-7.18685 -4.6667,-10.20693 2.0805,-4.56611 1.9034,-8.53716 -0.3807,-8.53716 -3.1698,0 -9.1206,5.87075 -15.7244,15.51285 -5.2406,7.65168 -7.1447,12.29943 -11.6038,28.32284 -2.9339,10.54298 -5.6701,19.50472 -6.0803,19.91492 -1.6733,1.6733 -8.1458,-2.07302 -9.8981,-5.7292 -1.5629,-3.26084 -1.6149,-6.15765 -0.3103,-17.30232 0.8618,-7.36217 1.9003,-14.88576 2.3079,-16.71909 0.6413,-2.88461 0.1454,-2.61537 -3.6833,2 -26.2155,31.60153 -55.358,49.13961 -89.53988,53.88531 -11.6298,1.6146 -16.12994,1.627 -24.90352,0.069 z M 48.111995,369.03441 c -14.6356,-3.1955 -21.15521,-12.13225 -21.2748,-29.16228 -0.0322,-4.58333 0.30486,-8.33333 0.749,-8.33333 0.44414,0 2.59017,1.5 4.76896,3.33333 5.7267,4.8187 14.24078,4.56008 23.43337,-0.71178 16.73043,-9.59474 43.118444,-53.41652 70.018055,-116.2769 l 7.26991,-16.98868 5.51776,3.99704 c 3.69149,2.67411 5.51776,5.00522 5.51776,7.04306 0,4.39413 -10.8107,44.17357 -17.13158,63.03798 -7.18795,21.45218 -17.40756,45.33783 -24.95759,58.33183 -4.857241,8.35957 -5.777691,10.84863 -4.366131,11.80683 0.98375,0.66778 7.843271,1.02549 15.243391,0.79489 12.46491,-0.38843 14.20647,-0.79079 23.6724,-5.46911 30.07552,-14.86412 51.53507,-51.3415 51.51435,-87.56516 -0.0155,-27.09376 -12.3315,-46.96325 -33.08274,-53.37266 -27.22597,-8.40924 -49.54505,-2.70335 -70.338651,17.98216 -11.094724,11.03705 -17.141304,20.06826 -23.917854,35.72384 -2.14262,4.95 -4.45552,9 -5.13978,9 -2.31352,0 -10.37322,-6.9488 -12.93769,-11.15444 -5.63567,-9.24228 -1.81384,-20.10838 11.89379,-33.816 23.56345,-23.56346 51.347165,-33.5456 88.881415,-31.93338 43.03707,1.84862 68.47202,16.87816 79.55879,47.01146 2.45005,6.65909 2.91527,10.80921 2.97719,26.55902 0.0845,21.48579 -1.65348,29.69244 -9.88286,46.66667 -20.51654,42.31823 -72.42045,65.06031 -125.705001,55.07855 -7.02919,-1.31678 -7.98185,-1.20527 -10.66667,1.24848 -7.080004,6.47068 -20.683904,9.55528 -31.614794,7.16858 z m 180.349925,-7.53393 c -1.60056,-1.12108 -3.29474,-4.08853 -3.76483,-6.59435 -2.12057,-11.30361 5.96719,-48.46065 15.21576,-69.90469 6.31653,-14.64572 7.81839,-16.57761 10.00392,-12.86839 0.84072,1.42684 4.11773,5.43094 7.28225,8.89796 5.57688,6.11002 5.6941,6.41951 3.81468,10.07242 -2.55596,4.96785 -6.2035,13.7687 -5.7065,13.7687 0.21584,0 3.43436,-4.95 7.15225,-11 7.56992,-12.31824 16.50752,-21.71284 21.9188,-23.03954 4.74055,-1.16227 9.85727,3.81236 11.20165,10.89057 1.90319,10.02033 -8.71636,45.81564 -13.59232,45.81564 -1.03156,0 -1.87557,-0.53511 -1.87557,-1.18913 0,-0.65402 -2.78261,-4.28407 -6.1836,-8.06678 -5.60928,-6.23886 -6.04271,-7.18685 -4.66667,-10.20693 2.08046,-4.56611 1.90335,-8.53716 -0.38076,-8.53716 -3.17158,0 -9.1227,5.87337 -15.71818,15.51285 -5.11791,7.47996 -7.14026,12.32336 -11.05964,26.48715 -2.63804,9.53333 -5.1057,18.38333 -5.48366,19.66667 -0.84701,2.87604 -4.29469,3.00074 -8.15758,0.29501 z m 737.82993,-0.72512 c -3.1835,-2.50415 -3.5131,-3.61911 -3.5131,-11.88271 0,-5.0156 0.895,-13.79704 1.9889,-19.51432 1.0939,-5.71729 1.5439,-10.79334 1,-11.28014 -0.5439,-0.4868 -3.4805,-1.25956 -6.5258,-1.71724 l -5.5369,-0.83215 -6.0417,12.41949 c -10.046,20.65074 -22.067,31.472 -35.0381,31.54123 -11.1964,0.0597 -16.4979,-8.67452 -13.9827,-23.03711 0.7962,-4.54682 2.0468,-10.34274 2.779,-12.87984 1.5849,-5.49109 1.0404,-6.1265 -6.1796,-7.21162 l -5.5369,-0.83215 -6.0417,12.41949 c -10.046,20.65074 -22.067,31.472 -35.0381,31.54123 -11.2931,0.0603 -16.496,-8.65125 -13.9384,-23.33815 3.689,-21.18361 13.0387,-42.81186 22.1296,-51.19162 7.0063,-6.45816 12.8625,-7.84634 20.0801,-4.75983 2.8686,1.22669 5.8196,2.33904 6.558,2.47187 3.3771,0.60761 7.3365,4.59702 6.5629,6.61281 -0.4549,1.18545 0.3985,3.85217 1.9137,5.98008 2.6402,3.70773 2.659,4.07739 0.5445,10.68955 -1.2046,3.76694 -1.8088,7.23036 -1.3427,7.69648 0.4661,0.4661 3.4407,1.13977 6.6102,1.49702 l 5.7628,0.64956 3.1765,-7.80592 c 4.7208,-11.60117 8.9778,-18.42072 14.7595,-23.64409 6.4807,-5.85493 12.4739,-7.13257 19.4546,-4.14736 2.8686,1.22669 5.8196,2.33904 6.5579,2.47187 3.3772,0.60761 7.3366,4.59702 6.563,6.61281 -0.4549,1.18545 0.3985,3.85217 1.9137,5.98008 2.6402,3.70773 2.659,4.07739 0.5445,10.68955 -1.2046,3.76694 -1.8088,7.23036 -1.3427,7.69648 0.4661,0.4661 3.4271,1.13574 6.58,1.48808 l 5.7325,0.6406 2.5427,-9.1303 c 3.0209,-10.84768 11.93288,-32.1773 14.52898,-34.77345 1.5575,-1.55751 2.419,-1.06823 5.7001,3.23752 2.1258,2.78977 5.3156,6.32192 7.0882,7.84923 3.48687,3.00426 3.50237,2.86386 -1.7519,15.88974 l -2.1513,5.33334 3.6883,-4.66667 c 8.17047,-10.33791 18.32437,-20.07008 23.60877,-22.62823 12.2437,-5.92708 20.6155,-1.95192 18.641,8.85131 -0.5137,2.81064 -3.5502,12.13676 -6.7478,20.72471 -3.1976,8.58796 -5.8138,16.80254 -5.8138,18.25465 0,9.01424 8.9782,0.17867 18.4156,-18.123 8.3386,-16.17092 12.2961,-21.56503 18.6383,-25.40469 6.1652,-3.73243 16.0925,-3.94294 23.668,-0.50187 16.9396,7.69464 16.9485,24.99484 0.018,35.45229 -5.7252,3.5363 -7.7638,4.0415 -16.3083,4.0415 h -9.7653 l 2e-4,6.39393 c 2e-4,12.54327 10.2435,16.52475 24.9262,9.68861 7.6973,-3.58376 17.6679,-12.15953 21.6744,-18.6421 1.4399,-2.32992 4.5048,-9.60716 6.8107,-16.17166 5.4791,-15.59742 12.7238,-31.26878 14.4552,-31.26878 0.7553,0 2.0644,1.35 2.9092,3 0.8448,1.65 3.9191,5.47692 6.8318,8.50426 5.1464,5.34895 5.2402,5.61231 3.3256,9.33334 -2.5813,5.01664 -6.2376,13.82906 -5.7377,13.82906 0.2158,0 3.4343,-4.95 7.1522,-11 7.57,-12.31824 16.5076,-21.71284 21.9188,-23.03954 4.7406,-1.16227 9.8573,3.81236 11.2017,10.89057 1.9032,10.02033 -8.7164,45.81564 -13.5923,45.81564 -1.0316,0 -1.8756,-0.53511 -1.8756,-1.18913 0,-0.65402 -2.7826,-4.28407 -6.1836,-8.06678 -5.6093,-6.23886 -6.0427,-7.18685 -4.6667,-10.20693 2.0805,-4.56611 1.9034,-8.53716 -0.3807,-8.53716 -3.1698,0 -9.1206,5.87075 -15.7244,15.51285 -5.2405,7.65168 -7.1447,12.29943 -11.6038,28.32284 -2.9339,10.54298 -5.6701,19.50472 -6.0803,19.91492 -1.5154,1.5154 -8.0264,-1.89977 -9.7345,-5.10609 -1.7445,-3.27453 -1.5843,-11.22647 0.5502,-27.31119 l 0.8846,-6.66666 -6.295,8.31325 c -14.2973,18.88116 -30.6462,27.18113 -45.6055,23.15299 -10.6271,-2.86156 -17.7349,-12.18275 -17.7977,-23.33963 l -0.029,-5.20671 -5.2225,8.08012 c -14.033,21.71192 -25.9709,27.93752 -30.8738,16.10076 -2.4812,-5.99008 -0.6744,-22.54869 4.0993,-37.56761 2.2959,-7.22343 3.8984,-13.40957 3.5609,-13.74699 -0.8856,-0.8856 -14.07867,12.32658 -20.62397,20.65382 -5.4867,6.9804 -9.6875,17.90824 -13.79798,35.89333 -1.8033,7.88981 -3.8433,8.78741 -9.6288,4.23656 z m -95.8377,-28.50137 c 2.134,-1.79566 5.7935,-6.85491 8.1322,-11.2428 l 4.2522,-7.97798 -3.5233,-3.52334 c -3.0685,-3.06851 -3.4389,-4.3281 -2.8689,-9.75722 0.36,-3.42861 0.8821,-7.11961 1.1601,-8.2022 0.7455,-2.90238 -5.2238,-3.35656 -8.24,-0.62694 -4.7568,4.30485 -14.5878,26.40482 -14.5878,32.79322 0,11.2529 7.5569,15.36856 15.6755,8.53726 z m 64,0 c 2.134,-1.79566 5.7935,-6.85491 8.1322,-11.2428 l 4.2522,-7.97798 -3.5233,-3.52334 c -3.0685,-3.06851 -3.4389,-4.3281 -2.8689,-9.75722 0.36,-3.42861 0.8821,-7.11961 1.1601,-8.2022 0.7455,-2.90238 -5.2238,-3.35656 -8.24,-0.62694 -4.7568,4.30485 -14.5878,26.40482 -14.5878,32.79322 0,11.2529 7.5569,15.36856 15.6755,8.53726 z m 149.07305,-22.05032 c 2.9664,-0.0382 7.2514,-5.55015 7.2514,-9.32787 0,-4.15191 -4.0354,-8.02367 -8.3629,-8.02367 -6.2344,0 -17.3425,10.8286 -14.9985,14.62124 1.1553,1.86922 8.824,3.97751 12.0281,3.30676 1.4667,-0.30704 3.3035,-0.56645 4.0819,-0.57646 z M 886.86185,297.75531 c -1.6803,-1.68032 -4.5304,5.37609 -3.3712,8.34676 0.6072,1.55634 1.3237,0.91578 2.7547,-2.46298 1.2737,-3.00745 1.4842,-5.01613 0.6165,-5.88378 z m 64,0 c -1.6803,-1.68032 -4.5304,5.37609 -3.3712,8.34676 0.6073,1.55634 1.3237,0.91578 2.7547,-2.46298 1.2737,-3.00745 1.4842,-5.01613 0.6165,-5.88378 z m 241.56405,64.43014 c -9.0099,-3.70538 -5.2359,-18.64665 4.71,-18.64665 4.0545,0 9.6427,5.67452 9.6427,9.79168 0,6.72885 -7.8084,11.54633 -14.3527,8.85497 z m -862.34759,-6.14236 c -4.02748,-4.34572 -5.20863,-10.30165 -4.00351,-20.18773 l 0.93252,-7.64989 -5.58129,8.66666 c -9.60174,14.9096 -18.41203,22.4341 -24.13933,20.61632 -3.66486,-1.16318 -7.8303,-8.35462 -7.83637,-13.52914 -0.007,-6.02898 3.46035,-21.93346 7.5042,-34.42051 3.91629,-12.09316 16.36043,-39.33333 17.96864,-39.33333 0.5834,0 2.84992,2.6005 5.03672,5.77889 2.18679,3.17839 5.35622,6.69533 7.04316,7.81543 l 3.06718,2.03653 -3.85332,9.18457 c -9.3508,22.28804 -12.40111,33.85124 -8.92978,33.85124 2.05655,0 9.62859,-8.4758 12.42752,-13.91077 1.48535,-2.88427 4.08247,-8.91531 5.77138,-13.40232 5.03366,-13.37324 13.69178,-31.35357 15.09776,-31.35357 0.7209,0 2.59294,2.07466 4.16009,4.61037 1.56716,2.53569 4.68308,6.15333 6.92428,8.03917 l 4.07492,3.42882 -5.35433,12.96082 c -7.38835,17.8844 -9.9999,27.11555 -8.17272,28.8885 2.24456,2.17794 8.31252,-5.94031 16.73026,-22.38323 l 7.40034,-14.45556 3.21602,3.02131 c 4.40586,4.13908 4.08632,6.63913 -2.35069,18.39232 -12.60217,23.01001 -27.18585,41.56258 -35.39045,45.02184 -6.08443,2.56533 -8.06635,2.28066 -11.7432,-1.68674 z m 870.87119,-22.89442 c -0.407,-0.65866 -1.1212,-3.58074 -1.5869,-6.49351 -0.6867,-4.29428 0.8062,-10.57492 7.8931,-33.20616 4.8069,-15.35061 11.4925,-37.74891 14.8567,-49.77399 3.3642,-12.02509 6.7115,-22.97509 7.4384,-24.33333 2.0397,-3.81127 8.6617,-3.23971 11.4309,0.98661 7.9083,12.06952 -0.3115,41.43818 -25.8824,92.47668 -9.7093,19.37919 -12.3761,23.21347 -14.1498,20.3437 z M 328.74497,270.70976 c -3.8264,-4.12876 -5.28534,-10.55589 -4.09125,-18.02336 1.00336,-6.27463 5.55871,-15.81427 7.5516,-15.81427 5.18269,0 13.24003,7.92564 13.24003,13.02362 0,3.5001 -10.2857,24.30972 -12.01571,24.30972 -0.79472,0 -2.90283,-1.57307 -4.68467,-3.49571 z m 93.33334,0 c -3.8264,-4.12876 -5.28535,-10.55589 -4.09126,-18.02336 1.00336,-6.27463 5.55871,-15.81427 7.5516,-15.81427 5.1827,0 13.24003,7.92564 13.24003,13.02362 0,3.5001 -10.28569,24.30972 -12.01571,24.30972 -0.79472,0 -2.90282,-1.57307 -4.68466,-3.49571 z M 39.420545,175.07591 c -7.9225,-3.57383 -15.27345,-15.06419 -15.30111,-23.91735 -0.006,-1.94061 0.46891,-2.12531 2.57158,-1 4.16707,2.23015 14.42362,1.60315 19.95752,-1.22004 9.99467,-5.0989 22.92386,-22.29898 37.190574,-49.475717 12.74233,-24.27293 19.674941,-41.05529 17.753301,-42.97693 -1.11124,-1.11123 -7.509381,-1.61373 -20.547071,-1.61373 -18.495534,0 -19.098454,0.0914 -26.073884,3.95506 -9.01574,4.99372 -17.23569,14.25411 -19.21217,21.64395 l -1.5271,5.70966 -3.69594,-3.54093 c -8.42496,-8.07162 -7.75482,-17.35766 1.92652,-26.69558 11.95572,-11.53164 16.3537,-12.38204 70.315905,-13.59628 49.61662,-1.11646 52.73904,-1.73907 65.28338,-13.01751 l 6.74569,-6.06496 2.91567,6.46996 c 1.6956,3.76257 3.14248,10.15044 3.45771,15.26536 0.51266,8.31886 0.31441,9.05465 -3.65905,13.58017 -5.56653,6.33993 -14.63792,9.34084 -26.43186,8.74393 l -8.94743,-0.45283 -7.00707,20 c -3.85388,11 -8.79144,24.499987 -10.97234,29.999987 l -3.96528,10.00001 3.62363,-4.66667 c 6.60373,-8.50458 16.86813,-18.897 20.53923,-20.79541 3.82499,-1.977967 8.80244,-2.407397 12.30867,-1.06194 3.36373,1.29078 2.54665,8.51617 -2.55761,22.61692 -5.09719,14.08119 -5.68143,17.90709 -2.73452,17.90709 2.55392,0 7.44501,-6.6574 12.73452,-17.33333 7.99581,-16.13812 13.7146,-21.33333 23.48331,-21.33333 6.56729,0 15.68408,5.4376 17.8389,10.63982 2.47826,5.98304 -0.51033,12.86173 -7.81764,17.99346 -4.85297,3.40812 -6.965,4.02614 -13.62394,3.98663 l -7.88063,-0.0468 v 4.94998 c 0,8.82919 8.12543,12.68865 18.0146,8.55669 5.66575,-2.36729 17.48344,-13.2472 20.31676,-18.70452 1.17452,-2.26226 2.34683,-3.30661 2.66249,-2.37187 0.3102,0.91855 -1.36565,4.81855 -3.72409,8.66667 -11.10343,18.11667 -22.4966,26.71084 -35.41016,26.71084 -11.03767,0 -17.6481,-5.83566 -19.12922,-16.88724 l -0.73626,-5.49366 -3.72442,6.34099 c -5.61118,9.55329 -13.21376,16.99234 -17.36585,16.99234 -8.51076,0 -9.71151,-12.95773 -3.12325,-33.70426 1.79822,-5.66266 2.82457,-10.29574 2.28074,-10.29574 -1.57776,0 -15.24719,14.80516 -19.21313,20.80947 -1.98939,3.01188 -4.69571,9.31188 -6.01405,14 -1.94617,6.92077 -2.96028,8.6067 -5.39219,8.96434 -3.65441,0.53742 -7.613681,-2.81081 -8.440911,-7.13821 -1.49682,-7.83009 7.763611,-41.70482 20.514201,-75.041107 3.73165,-9.75637 6.49879,-18.02488 6.14919,-18.37447 -0.34959,-0.3496 -2.54855,-1.18425 -4.88658,-1.85479 -3.04277,-0.87265 -4.40155,-0.76622 -4.78083,0.37447 -4.93429,14.83993 -22.512351,61.046907 -27.296121,71.752557 -9.460034,21.17071 -19.919694,35.62203 -29.289764,40.4675 -5.73187,2.96405 -13.52351,3.64297 -18.10262,1.57735 z M 194.63956,125.85248 c 4.76393,-2.45641 6.01145,-7.10801 2.77442,-10.34504 -3.8176,-3.8176 -7.61792,-3.25269 -12.76864,1.89803 -5.33396,5.33396 -5.55604,6.56593 -1.53333,8.50601 4.03037,1.94377 7.67959,1.9251 11.52755,-0.059 z"
                  id="path948-3" />
              </svg>
            </DrawSVG>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <div className="w3-container w3-center w3-animate-right">
          <img src={croonerCar} alt="Crooner Car" style={{paddingTop: '1%', width: '75%', height: '75%'}}></img>
        </div>
      </Row>
      </Container>
  )
}
export default LandingPage
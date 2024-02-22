function soft_left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
}
function obstacle_detected () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
    }
}
function all_ahead () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
}
function hard_right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    basic.pause(30)
}
function soft_right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
}
function hard_left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    basic.pause(30)
}
let IRR = 0
let IRL = 0
let left_turn = 0
while (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        obstacle_detected()
    }
    IRL = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    IRR = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (IRL == 0 && IRR == 0) {
        all_ahead()
    } else if (IRL == 0) {
        soft_left()
        left_turn = 1
    } else if (IRR == 0) {
        soft_right()
        left_turn = 0
    } else {
        if (left_turn) {
            soft_right()
        } else {
            soft_left()
        }
    }
})

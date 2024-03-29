const countdown = () => {
  const endDate = new Date("May 31, 2022 00:00:00").getTime()
  const now = new Date().getTime()

  const difference = endDate - now

  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24

  let timeDays =  difference < 0 ? "00" : Math.floor(difference / days)
  let timeHours = Math.floor((difference % days) / hours)
  let timeMinutes = Math.floor((difference % hours) / minutes)
  let timeSeconds = Math.floor((difference % minutes) / seconds)
  timeHours = difference < 0 ? "00" : timeHours < 10 ? "0" + timeHours : timeHours
  timeMinutes =  difference < 0 ? "00" : timeMinutes < 10 ? "0" + timeHours :timeMinutes
  timeSeconds =  difference < 0 ? "00" : timeMinutes < 10 ? "0" + timeMinutes : timeSeconds

  document.getElementById("Days").innerHTML = timeDays
  document.getElementById("Hours").innerHTML = timeHours
  document.getElementById("Minutes").innerHTML = timeMinutes
  document.getElementById("Seconds").innerHTML = timeSeconds

  if (difference < 0 ) {
    clearInterval();
  }
}

setInterval(countdown, 1000)

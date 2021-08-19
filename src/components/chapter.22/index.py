class TestCase:
  def __init__(self, name):
    self.name = name

  def setUp(self):
    pass

  def run(self):
    result = TestResult()
    result.testStarted()
    self.setUp()
    try:
      method = getattr(self, self.name)
      method()
    except:
      result.testFailed()
    self.tearDown()
    return result

class WasRun(TestCase):
  def setUp(self):
    self.wasRun = None
    self.log = 'setUp '

  def testMethod(self):
    self.wasRun = 1
    self.log += 'testMethod '

  def testBrokenMethod(self):
    raise Exception

  def tearDown(self):
    self.log += 'tearDown '

class TestCaseTest(TestCase):
  def setUp(self):
    self.test = WasRun('testMethod')

  def testTemplateMethod(self):
    test = WasRun('testMethod')
    test.run()
    assert(test.log == 'setUp testMethod tearDown ')

  def testResult(self):
    test = WasRun('testMethod')
    result = test.run()
    assert(result.summary() == '1 run, 0 failed')

  def testFailedResult(self):
    test = WasRun('testBrokenMethod')
    result = test.run()
    assert(result.summary() == '1 run, 1 failed')

  def testFailedResultFormatting(self):
    result = TestResult()
    result.testStarted()
    result.testFailed()
    assert(result.summary() == '1 run, 1 failed')

  def tearDown(self):
    pass

class TestResult:
  def __init__(self):
    self.runCount = 0
    self.failureCount = 0

  def testStarted(self):
    self.runCount += 1

  def testFailed(self):
    self.failureCount += 1

  def summary(self):
    return '%d run, %d failed' %(self.runCount, self.failureCount)

TestCaseTest('testFailedResultFormatting').run()
